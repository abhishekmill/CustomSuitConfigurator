import { useState } from "react";
import Scene from "./components/Scene";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <div class=" bg-slate-300 ">
        <Navbar />
        <Scene />
      </div>
    </>
  );
}

export default App;
