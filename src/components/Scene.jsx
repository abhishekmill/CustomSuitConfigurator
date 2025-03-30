import React from "react";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
const Scene = () => {
  return (
    <div className="w-full h-screen bg-gray-800 ">
      <Canvas>
        <OrbitControls />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        {/* <ambientLight intensity={0.5} /> */}
        <Environment preset="city" />

        <Experience />
      </Canvas>
    </div>
  );
};

export default Scene;
