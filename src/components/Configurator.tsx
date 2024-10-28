import React from "react";
import { CirclePicker, ColorResult } from "react-color";
import PanelDisclosure from "./common/Disclosure";
import {
  AppleWatchUltraState,
  AppleWatchUltraStateKeys,
  useWatchContext,
} from "./context/WatchContext";

const Configurator = () => {
  const colors = [
    "#DC602A",
    "#491c02",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#0d122d",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#222222",
  ];

  const mainBodyColors = ["#222222", "#636363"];

  const { watchState, setWatchState } = useWatchContext();

  const handleColorChange = (
    part: AppleWatchUltraStateKeys,
    color: ColorResult
  ) => {
    console.debug(`Changing color of ${part} to color: ${color.hex}`);
    setWatchState((prevWatchState) => ({
      ...prevWatchState,
      [part]: {
        ...prevWatchState[part],
        color: color.hex,
      },
    }));
  };

  const handleBandTextureChange = (type: "normal" | "leather") => {
    setWatchState((prevWatchState) => ({
      ...prevWatchState,
      "band-outside": {
        color: type === "leather" ? "#491c02" : "#DC602A",
        texture: type,
      },
    }));
  };

  const handleBodyTextureChange = (type: "normal" | "matte") => {
    setWatchState((prevWatchState) => ({
      ...prevWatchState,
      "main-body": {
        color: type === "matte" ? "#222222" : "#FFFFFF",
        texture: type,
      },
    }));
  };

  return (
    <div className="w-1/3 h-full overflow-y-auto shadow-md rounded-lg py-10 px-5 font-thin ">
      <h2>Customize your watch!</h2>
      <div className="flex flex-col w-full gap-5 mt-5  items-start justify-center">
        
        {/* Main body */}
        <div className="flex flex-col w-full">
          <h3>Main Body</h3>
          <div className="mt-4 flex flex-col gap-4">
            <PanelDisclosure title="Colours">
              <div>
                <CirclePicker
                  onChange={(color) =>
                    handleColorChange("main-body", color)
                  }
                  circleSize={20}
                  colors={mainBodyColors}
                />
              </div>
            </PanelDisclosure>
            <PanelDisclosure title="Texture">
              <div className="flex gap-3">
                <button
                  onClick={() => handleBodyTextureChange("normal")}
                  className={`${
                    watchState["main-body"].texture === "normal"
                      ? "font-normal"
                      : ""
                  } hover:font-normal transition duration-200 ease-in-out hover:-translate-y-0.5`}
                >
                  Normal
                </button>
                <button
                  onClick={() => handleBodyTextureChange("matte")}
                  className={`${
                    watchState["main-body"].texture === "matte"
                      ? "font-normal"
                      : ""
                  } hover:font-normal transition duration-200 ease-in-out hover:-translate-y-0.5`}
                >
                  Matte
                </button>
              </div>
            </PanelDisclosure>
          </div>
        </div>

        {/* Action button */}
        <div className="flex flex-col w-full">
          <h3>Action Button</h3>
          <div className="mt-3 flex flex-col gap-4">
            <PanelDisclosure title="Colours">
              <div>
                <CirclePicker
                  onChange={(color) =>
                    handleColorChange("action-button", color)
                  }
                  circleSize={20}
                  colors={colors}
                />
              </div>
            </PanelDisclosure>
            <PanelDisclosure title="Texture">
              <div></div>
            </PanelDisclosure>
          </div>
        </div>
        
        {/* Side button */}
        <div className="flex flex-col w-full">
          <h3>Side Button</h3>
        </div>
        
        {/* Digital crown */}
        <div className="flex flex-col w-full">
          <h3>Digital Crown</h3>
          <div className="mt-3 flex flex-col gap-4">
            <PanelDisclosure title="Colours">
              <div>
                <CirclePicker
                  onChange={(color) =>
                    handleColorChange("digital-crown", color)
                  }
                  circleSize={20}
                  colors={colors}
                />
              </div>
            </PanelDisclosure>
          </div>
        </div>
        
        {/* Band holder */}
        <div className="flex flex-col w-full">
          <h3>Band Holder</h3>
        </div>
        
        {/* Band inside */}
        <div className="flex flex-col w-full">
          <h3>Band Inside</h3>
          <div className="mt-3 flex flex-col gap-4">
            <PanelDisclosure title="Colours">
              <div>
                <CirclePicker
                  onChange={(color) => handleColorChange("band-inside", color)}
                  circleSize={20}
                  colors={colors}
                />
              </div>
            </PanelDisclosure>
          </div>
        </div>

        {/* Band outside */}
        <div className="flex flex-col w-full">
          <h3>Band Outside</h3>
          <div className="mt-3 flex flex-col gap-4">
            <PanelDisclosure title="Colours">
              <div>
                <CirclePicker
                  onChange={(color) => handleColorChange("band-outside", color)}
                  circleSize={20}
                  colors={colors}
                />
              </div>
            </PanelDisclosure>
            <PanelDisclosure title="Texture">
              <div className="flex gap-3">
                <button
                  onClick={() => handleBandTextureChange("normal")}
                  className={`${
                    watchState["band-outside"].texture === "normal"
                      ? "font-normal"
                      : ""
                  } hover:font-normal transition duration-200 ease-in-out hover:-translate-y-0.5`}
                >
                  Normal
                </button>
                <button
                  onClick={() => handleBandTextureChange("leather")}
                  className={`${
                    watchState["band-outside"].texture === "leather"
                      ? "font-normal"
                      : ""
                  } hover:font-normal transition duration-200 ease-in-out hover:-translate-y-0.5`}
                >
                  Leather
                </button>
              </div>
            </PanelDisclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
