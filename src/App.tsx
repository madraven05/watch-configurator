import { useState } from "react";
import Modal from "./components/Modal";

interface AppProps {
  modelPath: string;
}

const App: React.FC<AppProps> = ({ modelPath }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} className="button">
        Customize
      </button>

      <Modal modelPath={modelPath} open={open} setOpen={setOpen} />
    </div>
  );
};

export default App;
