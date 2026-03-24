import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./conponents/Navbar/Navbar";
import Players from "./conponents/Players/Players";

const fetchPlayer = async () => {
  const res = await fetch("/player.json");
  return res.json()
};

function App() {
  const [coin , setCoin] = useState(90000)

  const playerPromise = fetchPlayer()
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  );
}

export default App;
