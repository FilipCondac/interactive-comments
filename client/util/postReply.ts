import axios from "axios";

const postReply = async (reply: string, postId: string) => {
  try {
    const response = await axios({
      method: "post",
      url: "/reply",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        postId: postId,
        reply: reply,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    throw new Error("An error occurred");
  }
};

export default postReply;
