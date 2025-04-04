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
    <div className="w-[60%] h-screen  ">
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

        <Environment
          preset="city"
          backgroundRotation={[0, Math.PI / 1, 0]}
          backgroundBlurriness={1.1}
          environmentIntensity={0.7}
        />

        <Experience path={path} />
      </Canvas>
    </div>
  );
};

export default Scene;
