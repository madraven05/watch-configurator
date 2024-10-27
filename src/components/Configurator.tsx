import React from "react";
import { CirclePicker } from "react-color";
import PanelDisclosure from "./common/Disclosure";

const Configurator = () => {
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
  ];

  return (
    <div className="w-1/3 h-full shadow-md rounded-lg p-5 font-thin text-white">
      <h2>Customize your watch!</h2>
      <div className="flex flex-col w-full gap-5 mt-5 overflow-y-auto items-start justify-center">
        <h3>Main Body</h3>
        <div>
          <h3>Action Button</h3>
        </div>

        <div>
          <h3>Side Button</h3>
        </div>

        <div>
          <h3>Digital Crown</h3>
        </div>

        <div>
          <h3>Band Holder</h3>
        </div>

        <div className="flex flex-col w-full">
            <h3>Band Inside</h3>
            <div className="mt-3 flex flex-col gap-4">
              <PanelDisclosure title="Colours">
                <div>
                  <CirclePicker colors={colors} />
                </div>
              </PanelDisclosure>
              <PanelDisclosure title="Texture">
                <div>
                  
                </div>
              </PanelDisclosure>
            </div>
          </div>

        <div>
          <h3>Band Outside</h3>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
