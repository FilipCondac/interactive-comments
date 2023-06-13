import CommentBox from "./components/CommentBox";
import Post from "./components/Post";
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <main className="flex flex-col pt-10 bg-very-light-gray min-h-screen">
      <TopNav />
      <Post />
      <CommentBox />
    </main>
  );
};

export default App;
