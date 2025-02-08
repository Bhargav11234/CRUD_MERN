import { useEffect, useState } from "react";
import { getPost } from "../api/Postapi";
import "../App.css"

export const Posts = () => {  
  const [data, setData] = useState([]); 

  const getPostdata = async () => {
    try {
      const res = await getPost();
      console.log(res); 
      setData(res); 
    } catch (error) {
      console.error("Error fetching posts:", error);
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
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
