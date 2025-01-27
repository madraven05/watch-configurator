import { Html } from "@react-three/drei";
import React from "react";
import { TbHexagon3D } from "react-icons/tb";

const Loading: React.FC = () => {
  return (
    <Html center>
      <div>
        <TbHexagon3D className="animate-bounce text-7xl text-gray-600" />
      </div>
    </Html>
  );
};

export default Loading;
