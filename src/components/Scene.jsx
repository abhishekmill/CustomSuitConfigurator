import React from "react";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
const Scene = () => {
  return (
    <div className="w-full h-screen ">
      <Canvas>
        <OrbitControls />
        {/* <Environment preset="city" /> */}
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Experience />
      </Canvas>
    </div>
  );
};

export default Scene;
