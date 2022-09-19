import Clubs from "./components/clubs/Clubs";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <h1 className=" text-2xl text-lg font-bold text-gray-700 px-40 py-5 ">
        Clubs
      </h1>
      <Clubs />
    </>
  );
};

export default App;
