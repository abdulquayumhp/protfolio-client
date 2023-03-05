import "./App.css";
import HomeAll from "./Component/Home/HomeAll/HomeAll";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <HomeAll />
      <Toaster />

    </div>
  );
}

export default App;
