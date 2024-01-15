import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Background />
      </div>
      <Foreground />
    </>
  );
}

export default App;
