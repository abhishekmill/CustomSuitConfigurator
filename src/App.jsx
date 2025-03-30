import { useState } from "react";
import Scene from "./components/Scene";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar";
import "./index.css";
function App() {
  const [path, setPath] = useState({
    path: "/texture/4748-3.jpg",
    type: "pattern",
  });
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar setPath={setPath} />
        <Scene path={path} />
      </div>
    </>
  );
}

export default App;
