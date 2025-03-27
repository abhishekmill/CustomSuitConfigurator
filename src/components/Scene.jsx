import React from "react";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
const Scene = () => {
  return (
    <div className="w-full h-screen ">
      <Canvas>
        <OrbitControls />
        <Environment preset="city" />
        <Experience />
      </Canvas>
    </div>
  );
};

export default Scene;
