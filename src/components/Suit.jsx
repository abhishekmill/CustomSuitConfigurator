import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export function Suit(props) {
  const { nodes, materials } = useGLTF("/suit.glb");

  const path = "/blueTexture.jpg";

  const texture = useLoader(TextureLoader, path);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.last_standard001.geometry}
        material={materials["default"]}
        position={[0.054, 1.104, 0.674]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.045}
      />
      <mesh
        name="back"
        castShadow
        receiveShadow
        geometry={nodes.NoVent.geometry}
        material={materials["default.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {" "}
        <meshStandardMaterial map={texture} />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChestPocket.geometry}
        // material={materials["default.005"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {" "}
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["CL2(2Button)"].geometry}
        // material={materials["default.006"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {" "}
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2Button_Curved"].geometry}
        // material={materials["default.007"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        castShadow
        name="sleeve"
        receiveShadow
        geometry={nodes.Sleeve.geometry}
        // material={materials["default.008"]}
        position={[0.014, 0.021, -0.13]}
        rotation={[Math.PI / 27, 0, 0]}
        scale={0.581}
      >
        <meshStandardMaterial map={texture} side={DoubleSide} />
      </mesh>
      <mesh
        castShadow
        name="pocket"
        receiveShadow
        geometry={nodes["PK-1"].geometry}
        // material={materials["default.002"]}
        scale={[0.364, 0.148, 0.014]}
      >
        {" "}
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Hole.geometry}
        material={materials["Material.066"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Stitching.geometry}
        // material={materials["default.003"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={texture} />
      </mesh> */}
      {/* <mesh
        name="button"
        castShadow
        receiveShadow
        geometry={nodes["1_Thread003"].geometry}
        // material={materials["default.004"]}
        position={[0.054, 1.104, 0.674]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.045}
      >
        {" "}
        <meshStandardMaterial map={texture} />
      </mesh> */}
    </group>
  );
}

useGLTF.preload("/suit.glb");
