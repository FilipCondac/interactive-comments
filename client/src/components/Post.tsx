import getPosts from "../../util/getPosts";
import calculatePostDate from "../../util/calculatePostDate";
import { useEffect, useState } from "react";
import ReplyBox from "./ReplyBox";
// import PostReplies from "./PostReplies";
import PostVotes from "./PostVotes";
import Reply from "./Reply";

interface Post {
  _id: string;
  creator: string;
  content: string;
  likes: Array<string>;
  createdAt: Date;
  replies: Array<string>;
}

const Post = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [openedReplyBox, setOpenedReplyBox] = useState(null);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  const renderReplyBox = (postId: any) => {
    setOpenedReplyBox(openedReplyBox === postId ? null : postId);
  };

  return (
    <div>
      {posts.map((post: Post) => (
        <article key={post._id} className="mx-auto rounded-md mt-10 w-1/2">
          <div className="flex bg-white p-10 ">
            <PostVotes post={post} postType={"post"} />
            <div className="flex-col">
              <div className="flex">
                <img
                  src="/images/avatars/image-amyrobson.png"
                  alt="User Icon"
                  className="w-10 h-10 mr-4 -mt-2 rounded-full"
                ></img>
                <header className="mr-6">
                  <h2>{post.creator}</h2>
                </header>
                <time>{calculatePostDate(post.createdAt)}</time>
                <button
                  className=" ml-80 flex"
                  onClick={() => renderReplyBox(post._id)}
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
                <p>{post.content}</p>
              </section>
            </div>
          </div>
          {openedReplyBox === post._id && (
            <ReplyBox creator={post.creator} postId={post._id} />
          )}
          <Reply postId={post._id} />
        </article>
      ))}
    </div>
  );
};

export default Post;
