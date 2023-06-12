//Purpose: This file creates the reply box component
import { useState } from "react";
import postComment from "../../util/postComment";

type CommentBoxProps = {
  creator: string;
};

const CommentBox = ({ creator }: CommentBoxProps) => {
  const [comment, setComment] = useState("");

  const handleComment = (comment: string) => {
    postComment(comment);
  };

  return (
    <section className="bg-white mt-4 rounded-md flex w-1/2 mx-auto">
      <img
        src="/images/avatars/image-juliusomo.png"
        alt="Your user icon"
        className="m-auto h-20 w-20  mr-4 rounded-full p-4"
      ></img>
      <textarea
        className="border-black border w-full"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        className=" bg-moderate-blue h-10 m-4 mx-4 px-4 rounded-lg p-2 text-sm text-white"
        onClick={() => {
          handleComment(comment);
        }}
      >
        Send
      </button>
    </section>
  );
};

export default CommentBox;
