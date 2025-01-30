import React from "react";
import PanelDisclosure from "./common/Disclosure";
import {
  useWatchContext,
} from "./context/WatchContext";
import ColorPanel from "./ColorPanel";

const Configurator: React.FC = () => {
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

  // const handleColorChange = (
  //   part: AppleWatchUltraStateKeys,
  //   color: ColorResult
  // ) => {
  //   console.debug(`Changing color of ${part} to color: ${color.hex}`);
  //   setWatchState((prevWatchState) => ({
  //     ...prevWatchState,
  //     [part]: {
  //       ...prevWatchState[part],
  //       color: color.hex,
  //     },
  //   }));
  // };

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
    <div className="w-full px-3">
      <h2 className="text-lg">Customize your watch!</h2>
      <div className="flex flex-col shrink w-full gap-2 items-start justify-center">
        {/* Main body */}
        <div className="flex flex-col shrink w-full gap-5">
          <h3 className="font-normal">Main Body</h3>
          <div className="flex flex-col shrink gap-5 mb-2">
            <PanelDisclosure title="Colours">
              <div>
                <ColorPanel colors={mainBodyColors} />
              </div>
            </PanelDisclosure>
            <PanelDisclosure title="Texture">
              <div className="flex gap-3 text-sm">
                <button
                  onClick={() => handleBodyTextureChange("normal")}
                  className={`${
                    watchState["main-body"].texture === "normal"
                      ? "font-normal"
                      : ""
                  } hover:font-semibold hover:cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5`}
                >
                  Normal
                </button>
                <button
                  onClick={() => handleBodyTextureChange("matte")}
                  className={`${
                    watchState["main-body"].texture === "matte"
                      ? "font-normal"
                      : ""
                  } hover:font-semibold hover:cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5`}
                >
                  Matte
                </button>
              </div>
            </PanelDisclosure>
          </div>
        </div>

        {/* Action button */}
        <div className="flex flex-col shrink w-full gap-5">
          <h3 className="font-normal">Action Button</h3>
          <div className="flex flex-col shrink gap-5 mb-2">
            <PanelDisclosure title="Colours">
              <div>
                <ColorPanel colors={colors} />
              </div>
            </PanelDisclosure>
          </div>
        </div>

        {/* Digital crown */}
        <div className="flex flex-col shrink w-full gap-5">
          <h3 className="font-normal">Digital Crown</h3>
          <div className="flex flex-col shrink gap-5 mb-2">
            <PanelDisclosure title="Colours">
              <div>
                <ColorPanel colors={colors} />
              </div>
            </PanelDisclosure>
          </div>
        </div>

        {/* Band inside */}
        <div className="flex flex-col shrink w-full gap-5">
          <h3 className="font-normal">Band Inside</h3>
          <div className="flex flex-col shrink gap-5 mb-2">
            <PanelDisclosure title="Colours">
              <div>
                <ColorPanel colors={colors} />
              </div>
            </PanelDisclosure>
          </div>
        </div>

        {/* Band outside */}
        <div className="flex flex-col shrink w-full gap-5">
          <h3 className="font-normal">Band Outside</h3>
          <div className="flex flex-col shrink gap-5">
            <PanelDisclosure title="Colours">
              <div>
                <ColorPanel colors={colors} />
              </div>
            </PanelDisclosure>
            <PanelDisclosure title="Texture">
              <div className="flex gap-3 text-sm">
                <button
                  onClick={() => handleBandTextureChange("normal")}
                  className={`${
                    watchState["band-outside"].texture === "normal"
                      ? "font-normal"
                      : ""
                  } hover:font-semibold hover:cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5`}
                >
                  Normal
                </button>
                <button
                  onClick={() => handleBandTextureChange("leather")}
                  className={`${
                    watchState["band-outside"].texture === "leather"
                      ? "font-normal"
                      : ""
                  } hover:font-semibold hover:cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5`}
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
