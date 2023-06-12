import axios from "axios";

const postComment = async (comment: string) => {
  const response = await axios({
    method: "post",
    url: "/createPost",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      content: comment,
    },
  });
  console.log(response.data);
  return response.data;
};

export default postComment;
