import axios from "axios";

const handleVote = async (postId: string, voteType: string) => {
  try {
    const response = await axios({
      method: "post",
      url: "/vote",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        // userID: "test",
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
