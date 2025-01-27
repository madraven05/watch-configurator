import React, { Dispatch, SetStateAction } from "react";
import ConfiguratorCanvas from "./ConfiguratorCanvas";
import Configurator from "./Configurator";
// import ConfiguratorCanvas from "./ConfiguratorCanvas";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modelPath: string;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen, modelPath }) => {
  return (
    <div
      className={`${
        open ? "flex flex-col" : "hidden"
      } w-[90vw] h-[80vh] p-5 gap-3 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 border-2 border-gray-300 shadow-md rounded-md`}
    >
      <div className="">
        <button onClick={() => setOpen(false)} className="button">
          X
        </button>
      </div>
      <div className="w-full h-full flex">
        <div className="w-[70%] p-4">
          <ConfiguratorCanvas modelPath={modelPath} />
        </div>
        <div className="w-[30%] p-4">
          <Configurator />
        </div>
      </div>
    </div>
  );
};

export default Modal;
