
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    console.log("Response from getPosts:", response.data);
    return response.data
  } catch (error) {
    // handle error
  }
};