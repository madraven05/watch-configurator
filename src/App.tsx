import Configurator from "./components/Configurator";
import ConfiguratorCanvas from "./components/ConfiguratorCanvas";
import { useWatchContext } from "./components/context/WatchContext";

function App() {
  const {watchState} = useWatchContext();
  const col = (watchState["band-outside"].color);

  return (
    <div className="h-screen bg-stone-200 flex gap-10 justify-center p-20">
      <div className="w-full h-full gap-2 flex flex-col">
        <h1>Apple Watch <span style={{ color: watchState['band-outside'].color }}>Ultra</span></h1>
        <h2 className="font-thin">$400</h2>
        <ConfiguratorCanvas />
      </div>
      <Configurator/>
    </div>
  );
}

export default App;
