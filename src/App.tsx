import Configurator from "./components/Configurator";
import ConfiguratorCanvas from "./components/ConfiguratorCanvas";

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-slate-200 to-gray-600 flex gap-10 justify-center p-20">
      <div className="w-full h-full gap-2 flex flex-col">
        <h1>Apple Watch <span className="text-orange-400">Ultra</span></h1>
        <h2 className="font-thin">$400</h2>
        <ConfiguratorCanvas />
      </div>
      <Configurator/>
    </div>
  );
}

export default App;
