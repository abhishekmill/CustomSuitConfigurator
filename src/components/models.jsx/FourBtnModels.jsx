import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FourBtnSingle({ material, props }) {
  const { nodes, materials } = useGLTF("/4Buttons.glb");
  return (
    <group {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Hole003.geometry}
        material={materials["Material.001"]}
      >
        <meshStandardMaterial color={"grey"} />
      </mesh> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Stitching003.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={"grey"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.S4003.geometry}
        material={materials["Material.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={"grey"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3Button_Curved"].geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["CL2-3(3-4)"].geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["CL2(3-4Button)001"].geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/4Buttons.glb");
