import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { SixBtnDoubleBreasted } from "./models.jsx/SixBtnDoubleBreasted";
import { FourBtnSingle } from "./models.jsx/FourBtnModels";
import { TwoStraightPockets } from "./TwoStraightPockets";

export function SimpleSuit({ pocketType, buttonType, path, props }) {
  const { nodes, materials } = useGLTF("/simpleSuit.glb");

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
  const btnMaterial = new THREE.MeshStandardMaterial({
    roughness: 0.3,
    metalness: 0.85,
    color: "black",
  });

  innerTexture.repeat.set(0.7, 0.7);
  return (
    <group>
      <group {...props} dispose={null}>
        {buttonType === "2button" && (
          <group>
            <mesh
              name="front"
              castShadow
              receiveShadow
              geometry={nodes["2Button_Curved"].geometry}
              material={material}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="collar2"
              castShadow
              receiveShadow
              geometry={nodes["CL2-3(1-2)"].geometry}
              material={material}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="collar1"
              castShadow
              receiveShadow
              geometry={nodes["CL2-3(1-2)001"].geometry}
              material={material}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.last_standard001.geometry}
              material={materials["default.001"]}
              position={[0, 0.274, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.045}
            />
            {pocketType === "2straight" && (
              <mesh
                name="pocket"
                castShadow
                receiveShadow
                geometry={nodes["PK-1"].geometry}
                material={material}
                scale={[0.364, 0.148, 0.014]}
              />
            )}
            {pocketType === "2straightOneTicket" && (
              <TwoStraightPockets material={material} />
            )}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.S14_4001.geometry}
              material={material}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.045}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.S4.geometry}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh
              name="buttonhole"
              castShadow
              receiveShadow
              geometry={nodes.Button_Hole.geometry}
              material={btnMaterial}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Button_Stitching.geometry}
              material={btnMaterial}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["1_Thread003"].geometry}
              material={materials["default.006"]}
              position={[0, 0.274, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.045}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ChestPocket.geometry}
              material={material}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["CL2(2Button)"].geometry}
              material={materials["default.008"]}
              rotation={[Math.PI / 2, 0, 0]}
            />{" "}
          </group>
        )}
        <mesh
          name="arms"
          castShadow
          receiveShadow
          geometry={nodes.Sleeve.geometry}
          material={material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="back"
          castShadow
          receiveShadow
          geometry={nodes.NoVent.geometry}
          material={material}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      {buttonType === "6button" && <SixBtnDoubleBreasted material={material} />}
      {buttonType === "4button" && <FourBtnSingle material={material} />}
    </group>
  );
}

useGLTF.preload("/simpleSuit.glb");
