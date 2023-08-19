
import logo from "./logo.svg";
import "./App.css";
import Header from "./modules/Header/Header";
import ModalNotice from "./modules/ModalNotice/ModalNotice";
import ModalCongrats from "./modules/ModalCongrats/ModalCongrats";
import ModalDelete from "./modules/ModalDelete/ModalDelete";


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <ModalNotice />
        <ModalCongrats />
        <ModalDelete />
    </div>
  );
}

export default App;
