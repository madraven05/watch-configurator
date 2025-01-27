import React from "react";

interface ColorPanelProps {
  colors: string[];
  onChange?: () => void;
}

const ColorPanel: React.FC<ColorPanelProps> = ({ colors }) => {
  return (
    <div className="flex w-full h-full flex-wrap gap-2">
      {colors.map((col, idx) => (
        <div
          key={idx}
          style={{ backgroundColor: col }}
          className={`min-h-5 min-w-5 w-5 h-5 rounded-full shadow-sm`}
        >
          &nbsp;
        </div>
      ))}
    </div>
  );
};

export default ColorPanel;
