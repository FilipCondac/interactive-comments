import axios from "axios";

const handleVote = async (
  postId: string,
  voteType: string,
  postType: string
) => {
  try {
    const response = await axios({
      method: "post",
      url: "/vote",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        postType: postType,
        postId: postId,
        voteType: voteType,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("An error occurred");
  }
};

export default handleVote;
