import React from "react";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  SpotLight,
  Stage,
} from "@react-three/drei";
const Scene = () => {
  return (
    <div className="w-[60%] h-screen bg-gray-800 ">
      <Canvas>
        <OrbitControls />
        <pointLight intensity={2} color={"white"} position={[1, 2, 3.5]} />

        <Environment
          preset="city"
          backgroundRotation={[0, Math.PI / 1, 0]}
          backgroundBlurriness={1.1}
          environmentIntensity={0.6}
        />

        <Experience />
      </Canvas>
    </div>
  );
};

export default Scene;
