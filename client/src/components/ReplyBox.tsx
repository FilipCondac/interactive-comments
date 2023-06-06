//Purpose: This file creates the reply box component
import postReply from "../../util/postReply";
import { useState } from "react";

type ReplyBoxProps = {
  creator: string;
  postId: string;
};

const ReplyBox = ({ creator, postId }: ReplyBoxProps) => {
  const [reply, setReply] = useState(`@${creator} `);

  const handlePostReply = (postId: string, reply: string) => {
    postReply(reply, postId);
  };

  return (
    <section className="bg-white mt-4 rounded-md flex">
      <img
        src="/images/avatars/image-juliusomo.png"
        alt="Your user icon"
        className="m-auto h-20 w-20  mr-4 rounded-full p-4"
      ></img>
      <textarea
        className="border-black border w-full"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      ></textarea>
      <button
        className=" bg-moderate-blue h-10 m-4 mx-4 px-4 rounded-lg p-2 text-sm text-white"
        onClick={() => {
          handlePostReply(postId, reply);
        }}
      >
        Reply
      </button>
    </section>
  );
};

export default ReplyBox;
