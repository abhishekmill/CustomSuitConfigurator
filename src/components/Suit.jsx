/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 suit.glb --transform --shadows --keepmaterials --keepmeshes --keepnames 
Files: suit.glb [266.18KB] > C:\Users\abhishek\Desktop\CustomSuitConfigurator\public\suit-transformed.glb [188.56KB] (29%)
*/

import React, { useRef } from "react";
import { Decal, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { Collar } from "./models.jsx/collar";
export function Suit({ path, props }) {
  const { nodes, materials } = useGLTF("/suitnotexture.glb");
  const texture = useLoader(TextureLoader, path.path);
  const innerTexture = useLoader(TextureLoader, "/texture/inner.png");

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  if (path.type === "pattern") {
    texture.repeat.set(17, 17);
  } else {
    texture.repeat.set(1.1, 1.1);
  }
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.9,
    metalness: 0.45,
  });

  innerTexture.repeat.set(0.7, 0.7);

  return (
    <group {...props} dispose={null}>
      <Collar material={material} />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.S4.geometry}
        // material={materials["Plastic Blue 16"]}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="sleeve"
        castShadow
        receiveShadow
        geometry={nodes.Sleeve.geometry}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Hole.geometry}
        material={materials["Material.066"]}
        // material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Button_Stitching.geometry}
        material={materials["Basic Thread"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1_Thread003"].geometry}
        material={materials["default.002"]}
        position={[0, 0.274, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChestPocket.geometry}
        // material={materials["default.003"]}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      ></mesh>
      <mesh
        name="collar"
        castShadow
        receiveShadow
        geometry={nodes["CL2-3(1-2)"].geometry}
        // material={materials["Fabric.001"]}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="chest"
        castShadow
        receiveShadow
        geometry={nodes["2Button_Curved"].geometry}
        // material={materials["Fabric 5"]}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.last_standard001.geometry}
        // material={materials["default.007"]}
        material={material}
        position={[0, 0.274, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NoVent.geometry}
        // material={materials.Fabric}
        material={material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="inner"
        position={[0, 0, 0.00001]}
        scale={0.97}
        castShadow
        receiveShadow
        geometry={nodes.NoVent.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          map={innerTexture}
          metalness={1}
          roughness={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/suitnotexture.glb");
