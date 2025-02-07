import React from "react";
import { AppleWatchUltraStateKey } from "./context/WatchContext";

interface ColorPanelProps {
  name?:AppleWatchUltraStateKey;
  colors: string[];
  onChange?: (color: string, part: AppleWatchUltraStateKey) => void;
}

const ColorPanel: React.FC<ColorPanelProps> = ({
  name,
  colors,
  onChange = () => {},
}) => {
  return (
    <div className="flex w-full h-full flex-wrap gap-2">
      {colors.map((col, idx) => (
        <div
          key={idx}
          onClick={() => onChange(col, name!)}
          style={{ backgroundColor: col }}
          className={`min-h-5 min-w-5 w-5 h-5 rounded-full shadow-sm hover:cursor-pointer hover:-translate-y-0.5 transition duration-200`}
        >
          &nbsp;
        </div>
      ))}
    </div>
  );
};

export default ColorPanel;
