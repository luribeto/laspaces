// import logo from './logo.svg';
// import paces from './paces-v.jpeg';
import logo from './laspaces-logo-web.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-background-gray">
        <div className="App-overlay">
            {/* <img src={paces} className="App-background" alt="peace"/> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="App-texts">
              <img src={logo} className="App-logo-web" alt="peaces"/>
              {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Especialistas en justicia restaurativa.
              </a> */}
              {/* <h5>Especialistas en Justicia Restaurativa.</h5> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
