import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Loader,
  OrbitControls,
  SpotLight,
  Stage,
} from "@react-three/drei";
import { SimpleSuit } from "./SimpleSuit";
import Sidebar from "./Sidebar";
const Scene = () => {
  const [path, setPath] = useState({
    path: "/texture/4748-3.jpg",
    type: "pattern",
  });

  const [buttonType, setButtonType] = useState("2button");
  const [pocketType, setPocketType] = useState("2straight");
  return (
    <div className="w-full flex  h-screen ">
      <div className="w-full border ">
        <Sidebar setPath={setPath} setButtonType={setButtonType} />
      </div>

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

        <SimpleSuit
          pocketType={pocketType}
          buttonType={buttonType}
          path={path}
        />
        <Environment
          preset="city"
          backgroundRotation={[0, Math.PI / 1, 0]}
          backgroundBlurriness={1.1}
          environmentIntensity={0.7}
        />
      </Canvas>
      <Loader />
    </div>
  );
};

export default Scene;
