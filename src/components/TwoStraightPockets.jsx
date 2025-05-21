import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TwoStraightPockets({ material, props }) {
  const { nodes, materials } = useGLTF("/2straight&1pocket.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["PK-2"].geometry}
        material={material}
        scale={[0.364, 0.148, 0.014]}
      />
    </group>
  );
}

useGLTF.preload("/2straight&1pocket.glb");
