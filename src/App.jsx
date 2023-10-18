import "./App.css";
import { DisplayClip } from "./components/Clips";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Shop } from "./components/Shop";
import { Show } from "./components/Show";
import { Stream } from "./components/Stream";

function App() {
      return (
            <div className="App">
                  <div id="customCursor"></div>
                  <Navigation />
                  <header id="home" className="App-header">
                        <h1 className="hoverContainer">
                              <span>JEUNE</span> PAUVRE
                        </h1>
                        <h2>Yung Poor Alo</h2>
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
