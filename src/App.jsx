import { useState } from "react";
import Scene from "./components/Scene";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  const [path, setPath] = useState({
    path: "/texture/4748-3.jpg",
    type: "pattern",
  });
  return (
    <>
      <Navbar />
      <div class=" flex size bg-radial-[at_25%_25%] from-zinc-400 to-blue-100 to-75%">
        <Sidebar setPath={setPath} />
        <Scene path={path} />
      </div>
    </>
  );
}

export default App;
