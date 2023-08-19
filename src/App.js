import ModalNotice from "./modules/ModalNotice/ModalNotice";
import ModalCongrats from "./modules/ModalCongrats/ModalCongrats";
import ModalDelete from "./modules/ModalDelete/ModalDelete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModalNotice />
        <ModalCongrats />
        <ModalDelete />
      </header>
    </div>
  );
}

export default App;
