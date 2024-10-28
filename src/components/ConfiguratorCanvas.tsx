import React from "react";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PlaneGeometry } from "three";
import { AppleWatch } from "./three/apple-watch";

const ConfiguratorCanvas = () => {
  return (
    <div className="lg:w-3/4 h-full w-full shadow-lg rounded-xl">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <PresentationControls

          global
          rotation={[0, 0.3, 0]} // Default rotation
          polar={[-Math.PI / 2, Math.PI / 2]} // Vertical rotation limits
        //   azimuth={[-Math.PI / 2, Math.PI / 2]} // Horizontal rotation limits
          config={{ mass: 2, tension: 500 }} // Adjusts the "weight" and stiffness of the controls
          // snap={{ mass: 4, tension: 1500 }}
        >
          <Suspense fallback={null}>
            <AppleWatch />
          </Suspense>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-5}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
              mixBlur={0} // How much blur mixes with surface roughness (default = 1)
              mixStrength={1} // Strength of the reflections
              mixContrast={1} // Contrast of the reflections
              resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
              mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
              depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
              minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
              maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
              depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
              distortion={1} // Amount of distortion based on the distortionMap texture
              color={"#797979"}
              reflectorOffset={0.2}
            />
          </mesh>
        </PresentationControls>
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default ConfiguratorCanvas;
