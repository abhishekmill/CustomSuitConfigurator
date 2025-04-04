import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Collar({ material }) {
  const { nodes, materials } = useGLTF("/collar.glb");
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["CL2(2Button)"].geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/collar.glb");
