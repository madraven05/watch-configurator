import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect, useMemo } from "react";
import {
  AppleWatchUltraStateKey,
  useWatchContext,
} from "../context/WatchContext";

const watchMeshes: AppleWatchUltraStateKey[] = [
  "action-button",
  "side-button",
  "band-outside",
  "band-inside",
];

type TextureKeys = Extract<
  keyof THREE.MeshStandardMaterial,
  | "normalMap"
  | "roughnessMap"
  | "metalnessMap"
  | "aoMap"
  | "emissiveMap"
  | "displacementMap"
  | "alphaMap"
  | "lightMap"
  | "bumpMap"
  | "envMap"
>;

const textureProps: Array<TextureKeys> = [
  "alphaMap",
  "aoMap",
  "bumpMap",
  "displacementMap",
  "emissiveMap",
  "envMap",
  "lightMap",
  "metalnessMap",
  "normalMap",
  "roughnessMap",
];

const AppleWatch: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const { watchState } = useWatchContext();

  if (!watchState) {
    throw new Error("Component should be wrapped around WatchContextProvider");
  }

  const textureDict = useMemo(() => {
    const textureDict: {
      [meshName: string]: Partial<Record<TextureKeys, THREE.Texture>>;
    } = {};
    scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        (watchMeshes as string[]).includes(child.name)
      ) {
        const material = child.material as THREE.MeshStandardMaterial;

        if (!textureDict[child.name]) {
          textureDict[child.name] = {};
        }

        textureProps.forEach((prop) => {
          if (material[prop] instanceof THREE.Texture) {
            textureDict[child.name][prop] = material[prop] as THREE.Texture;
          }
        });
      }
    });
    return textureDict;
  }, [scene]);

  console.log(textureDict);

  useEffect(() => {
    scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        (watchMeshes as string[]).includes(child.name)
      ) {
        const bodyPart = child.name as AppleWatchUltraStateKey;
        console.log(
          `Updating ${child.name} with color`,
          watchState[bodyPart].color
        );
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(watchState[bodyPart].color),
          ...textureDict[child.name],
        });
      }
    });
  }, [watchState]);

  return (
    <group position={[0, 0, 0]}>
      <primitive object={scene} scale={40} />
    </group>
  );
};

export default AppleWatch;
