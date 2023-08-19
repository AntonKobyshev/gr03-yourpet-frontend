import logo from "./logo.svg";
import "./App.css";
import ModalNotice from "./modules/ModalNotice/ModalNotice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModalNotice />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here would be super App!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
