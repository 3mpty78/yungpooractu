import "./App.css";
import { DisplayClip } from "./components/Clips";
import { Contact } from "./components/Contact";
import { Shop } from "./components/Shop";
import { Show } from "./components/Show";
import { Stream } from "./components/Stream";

const customCursor = document.getElementById("customCursor");

const updateCursorPos = (event) => {
  customCursor.style.top = `${event.clientY}px`;
  customCursor.style.left = `${event.clientX}px`;
};

function App() {
  return (
    <div
      className="App"
      onMouseMove={(event) => {
        updateCursorPos(event);
      }}>
      <div id="customCursor"></div>
      <header className="App-header">
        <h1 className="hoverContainer">
          Yung Poor <span>Actu</span>
        </h1>
      </header>
      <DisplayClip />
      <Stream />
      <Show />
      <Shop />
      <Contact />
    </div>
  );
}

export default App;
