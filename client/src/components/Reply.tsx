import { useEffect, useState } from "react";
import calculatePostDate from "../../util/calculatePostDate";
import PostVotes from "./PostVotes";
import ReplyBox from "./ReplyBox";
import getReplies from "../../util/getReplies";

type ReplyProps = {
  postId: string;
};

interface Reply {
  _id: string;
  creator: string;
  content: string;
  likes: Array<string>;
  createdAt: Date;
  postId: string;
}

const Reply = ({ postId }: ReplyProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [openedReplyBox, setOpenedReplyBox] = useState(null);
  const [repliesData, setRepliesData] = useState<Array<Reply>>([]);

  const renderReplyBox = (postId: any) => {
    setOpenedReplyBox(openedReplyBox === postId ? null : postId);
  };

  useEffect(() => {
    getReplies(postId)
      .then((res) => {
        setRepliesData(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load replies:", error);
        setIsLoading(false);
      });
  }, [postId]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div> // Replace this with your own loading spinner or placeholder
      ) : (
        repliesData.map((reply: any) => (
          <article key={reply._id} className="mx-auto rounded-md mt-10 w-1/2">
            <div className="flex bg-white p-10 ">
              <PostVotes post={reply} postType={"reply"} />
              <div className="flex-col">
                <div className="flex">
                  <img
                    src="/images/avatars/image-amyrobson.png"
                    alt="User Icon"
                    className="w-10 h-10 mr-4 -mt-2 rounded-full"
                  ></img>
                  <header className="mr-6">
                    <h2>{reply.creator}</h2>
                  </header>
                  <time>{calculatePostDate(reply.createdAt)}</time>
                  <button
                    className=" ml-80 flex"
                    onClick={() => renderReplyBox(reply._id)}
                  >
                    <img
                      src="/images/icon-reply.svg"
                      alt="Edit Arrow"
                      className="m-auto mr-2 mt-2"
                    ></img>
                    Reply
                  </button>
                </div>
                <section>
                  <p>{reply.content}</p>
                </section>
              </div>
            </div>
            {openedReplyBox === reply._id && (
              <ReplyBox creator={reply.creator} postId={reply._id} />
            )}
          </article>
        ))
      )}
    </div>
  );
};

export default Reply;
