import React from "react";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  SpotLight,
  Stage,
} from "@react-three/drei";
const Scene = ({ path }) => {
  return (
    <div className="w-[60%] h-screen bg-gray-800 ">
      <Canvas>
        <OrbitControls />
        <pointLight intensity={4} color={"white"} position={[1, 2, 2.5]} />

        <Environment
          preset="city"
          backgroundRotation={[0, Math.PI / 1, 0]}
          backgroundBlurriness={1.1}
          environmentIntensity={0.8}
        />

        <Experience path={path} />
      </Canvas>
    </div>
  );
};

export default Scene;
