import ModalNotice from "./modules/ModalNotice/ModalNotice";
import ModalCongrats from "./modules/ModalCongrats/ModalCongrats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModalNotice />
        <ModalCongrats />
      </header>
    </div>
  );
}

export default App;
