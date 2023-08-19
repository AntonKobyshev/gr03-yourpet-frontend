import Header from "./modules/Header/Header";
import ModalNotice from "./modules/ModalNotice/ModalNotice";
import ModalCongrats from "./modules/ModalCongrats/ModalCongrats";
import ModalDelete from "./modules/ModalDelete/ModalDelete";

function App() {
  return (
    <>
      <Header />
      <ModalNotice />
      <ModalCongrats />
      <ModalDelete />
    </>
  );
}

export default App;