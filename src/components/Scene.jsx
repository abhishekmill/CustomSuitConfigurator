import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  SpotLight,
  Stage,
} from "@react-three/drei";
import Sidebar from "./Sidebar";
import { SimpleSuit } from "./SimpleSuit";
const Scene = () => {
  const [path, setPath] = useState({
    path: "/texture/4748-3.jpg",
    type: "pattern",
  });

  const [buttonType, setButtonType] = useState("4button");
  return (
    <div className="w-full flex  h-screen bg-red-950 ">
      <Sidebar setPath={setPath} setButtonType={setButtonType} />

      <Canvas>
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 4} // Restrict lower tilt
          maxPolarAngle={Math.PI / 2} // Restrict upper tilt
          // minAzimuthAngle={-Math.PI / 4} // Restrict left rotation
          // maxAzimuthAngle={Math.PI} // Restrict right rotation
          minDistance={4}
          maxDistance={8}
        />
        <pointLight intensity={5.5} color={"white"} position={[1, 1, 2.2]} />

        <SimpleSuit buttonType={buttonType} path={path} />
        <Environment
          preset="city"
          backgroundRotation={[0, Math.PI / 1, 0]}
          backgroundBlurriness={1.1}
          environmentIntensity={0.7}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
