import CommentBox from "./components/CommentBox";
import Post from "./components/Post";

const App = () => {
  return (
    <main className="flex flex-col pt-10 bg-very-light-gray min-h-screen">
      <Post />
      <CommentBox creator={"Julius"} />
    </main>
  );
};

export default App;
