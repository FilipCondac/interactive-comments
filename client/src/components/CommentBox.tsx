//Purpose: This file creates the reply box component
import { useState } from "react";
import postComment from "../../util/postComment";
import { useAuth0 } from "@auth0/auth0-react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const { user, isAuthenticated } = useAuth0();

  const handleComment = (
    comment: string,
    creator: string,
    creatorPicture: string
  ) => {
    postComment(comment, creator, creatorPicture);
  };

  return (
    <section className="bg-white mt-4 rounded-md flex w-1/2 mx-auto p-2 mb-10">
      <img
        src={user?.picture}
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
          if (isAuthenticated && user) {
            handleComment(comment, user.name || "", user.picture || "");
          }
        }}
      >
        Send
      </button>
    </section>
  );
};

export default CommentBox;
