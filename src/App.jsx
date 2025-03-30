import Scene from "./components/Scene";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Scene />
      </div>
    </>
  );
}

export default App;
