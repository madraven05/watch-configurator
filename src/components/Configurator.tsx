import React from "react";

const Configurator = () => {
  return (
    <div className="w-1/3 h-full shadow-md rounded-lg p-5 font-thin text-white">
      <h2>Customize your watch!</h2>
      <div className="flex flex-col gap-5 mt-5 items-start justify-center">
        <div>
            <h3>Main Body</h3>
        </div>
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
        <div>
            <h3>Band Inside</h3>
        </div>
        <div>
            <h3>Band Outside</h3>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
