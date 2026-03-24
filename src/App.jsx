import { Suspense } from "react";
import "./App.css";
import Navbar from "./conponents/Navbar/Navbar";
import Players from "./conponents/Players/Players";

const fetchPlayer = async () => {
  const res = await fetch("/player.json");
  return res.json()
};

function App() {

  const playerPromise = fetchPlayer()
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Players playerPromise={playerPromise} ></Players>
      </Suspense>
    </>
  );
}

export default App;
