import axios from "axios";

const getReplies = async (postId: string) => {
  const replies = await axios.get(`/getReplies/${postId}`);

  return replies.data;
};

export default getReplies;
