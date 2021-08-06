import Canvas from "./components/canvas";
import Barras from "./components/barras";
import Header from "./components/header";
import './css/app.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Canvas></Canvas>
      <Barras></Barras>
    </div>
  );
}

export default App;
