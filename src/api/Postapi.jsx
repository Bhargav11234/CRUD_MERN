import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//get method
export const getPost = async () => {
  const response = await api.get("/posts");
  return response.data; // Return only data
};

// delete method 
export const deletPost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;;
};