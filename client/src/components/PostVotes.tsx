//Purpose: Component for handling votes on posts
import handleVote from "../../util/handleVote";
import { Post, Reply } from "../types/types";

type PostVotesProps = {
  post: Post | Reply;
  postType: string;
};

const PostVotes = ({ post, postType }: PostVotesProps) => {
  return (
    <div className="flex-col mr-10 bg-light-gray p-2 rounded-lg">
      <button
        onClick={() => {
          handleVote(post._id, "like", postType);
        }}
      >
        <img src="/images/icon-plus.svg" alt="Upvote"></img>
      </button>
      <p className="">{post.likes.length}</p>
      <button
        onClick={() => {
          handleVote(post._id, "dislike", postType);
        }}
      >
        <img src="/images/icon-minus.svg" alt="Downvote"></img>
      </button>
    </div>
  );
};

export default PostVotes;
