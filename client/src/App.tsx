import axios from "axios";
const App = () => {
  const test = async () => {
    const res = await axios.get("/");

    console.log(res.data);
  };

  test();

  return (
    <main className="flex flex-col h-screen justify-center">
      <h1 className="text-5xl m-auto">
        React + Tailwind + Typescript + Vite Template
      </h1>
    </main>
  );
};

export default App;
