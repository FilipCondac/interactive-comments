import Post from "./components/Post";

interface Post {
  _id: string;
  creator: string;
  content: string;
  likes: Array<string>;
  createdAt: Date;
  replies: Array<string>;
}

const App = () => {
  return (
    <main className="flex flex-col pt-10 bg-very-light-gray min-h-screen">
      <Post />
    </main>
  );
};

export default App;
