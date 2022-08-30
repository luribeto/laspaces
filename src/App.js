// import logo from './logo.svg';
// import paces from './paces-v.jpeg';
import logo from './laspaces-logo-2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-background">
        <div className="App-overlay">
            {/* <img src={paces} className="App-background" alt="peace"/> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="App-texts">
              {/* <img src={logo} className="App-logo-2" alt="peaces"/> */}
              <h2>LAS <b>PACES</b></h2>
              {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Especialistas en justicia restaurativa.
              </a> */}
              <h5>Especialistas en Justicia Restaurativa.</h5>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
