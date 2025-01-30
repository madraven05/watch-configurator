import React from "react";
import {
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AppleWatch from "./three/AppleWatch";
import Loading from "./three/Loading";

const ConfiguratorCanvas:React.FC<{modelPath: string}> = ({modelPath}) => {
  return (
    <div className="h-full p-5 w-full border-[1px] border-black/10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <PresentationControls
          global
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 2, Math.PI / 2]}
          config={{ mass: 2, tension: 500 }}
        >
          <Suspense fallback={<Loading/>}>
            <AppleWatch modelPath={modelPath}/>
          </Suspense>
        </PresentationControls>
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default ConfiguratorCanvas;
