import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SixBtnDoubleBreasted({ material, props }) {
  const { nodes, materials } = useGLTF("/6-btnDbl-breasted.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["CL1(1-2)"].geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="btn"
        castShadow
        receiveShadow
        geometry={nodes.S14_Circle009.geometry}
        material={materials["Material.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.076}
      >
        <meshStandardMaterial color={"grey"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["LiningStraight1-4"].geometry}
        material={materials["Material.074"]}
        rotation={[Math.PI / 2, 0, 0]}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4D2"].geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["6D3003"].geometry}
        material={materials["default.013"]}
        position={[0, 0.345, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["CL1(D)002"].geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/6-btnDbl-breasted.glb");
