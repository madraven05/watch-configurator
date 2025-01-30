import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect } from "react";

const AppleWatch: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    scene.traverse((child) => {
      if(child instanceof THREE.Mesh) {
        console.log(child);
      }
    })
  }, [scene]);

  return (
    <group position={[0, 0, 0]}>
      <primitive object={scene} scale={40} />
    </group>
  );
};

export default AppleWatch;
