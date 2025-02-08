import { useEffect, useState } from "react";
import {deletPost, getPost } from "../api/Postapi";
import "../App.css"

export const Posts = () => {  
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({}); 

  const getPostdata = async () => {
    try {
      const res = await getPost();
      console.log(res); 
      setData(res); 
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // To delet the data 
  const handleDeletePost = async (id) => {
    try {
      const res = await deletPost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
    
  };


  useEffect(() => {
    getPostdata();
  }, []);

  return (
    <>
      <section className="section-post">
        <ul>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button>Edit</button>
                <button onClick={()=> handleDeletePost(id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
