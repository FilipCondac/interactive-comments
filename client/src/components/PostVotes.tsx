import handleVote from "../../util/handleVote";

type PostVotesProps = {
  post: any;
};

const PostVotes = ({ post }: PostVotesProps) => {
  return (
    <div className="flex-col mr-10 bg-light-gray p-2 rounded-lg">
      <button
        onClick={() => {
          handleVote(post._id, "like");
        }}
      >
        <img src="/images/icon-plus.svg" alt="Upvote"></img>
      </button>
      <p className="">{post.likes.length}</p>
      <button
        onClick={() => {
          handleVote(post._id, "dislike");
        }}
      >
        <img src="/images/icon-minus.svg" alt="Downvote"></img>
      </button>
    </div>
  );
};

export default PostVotes;
