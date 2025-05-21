import { useState } from "react";
import Scene from "./components/Scene";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <div class="bg-red-950 ">
        <Navbar />
        <Scene />
      </div>
    </>
  );
}

export default App;
