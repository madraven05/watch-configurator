import { useGLTF } from "@react-three/drei";
import React from "react";

const AppleWatch: React.FC<{modelPath: string}> = ({
    modelPath
}) => {
    const {scene} = useGLTF(modelPath);
  return (
    <group position={[0,0,0]}>
      <primitive object={scene} scale={40} />
    </group>
  );
};

export default AppleWatch;
