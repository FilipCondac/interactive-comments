import axios from "axios";

const getPots = async () => {
  const posts = await axios.get("/getPosts");

  return posts.data;
};

export default getPots;
