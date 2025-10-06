import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getComments = async (payload) => {
  try {
    const response = await axios.get(`${baseUrl}/comments?postId=${payload}`);
    return response.data
  } catch (error) {
    // handle error
  }
};
