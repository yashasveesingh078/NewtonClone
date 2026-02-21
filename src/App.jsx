import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Centre from "./components/Centre";
function App() {
  return (
    <div className="h-screen flex flex-col">
      
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <LeftBar />
        <Centre />
        <RightBar />
      </div>

    </div>
  );
}

export default App