import { useReducer, useState } from "react";

import Header from "./components/organisms/Header";
import Button from './components/atoms/Button';
import ProjectList from "./components/molecules/ProjectList";
import Modal from "./components/organisms/Modal";
import ProjectCreate from './components/molecules/ProjectCreate';
import { projects } from './helpers';
import { ModalDataContext, ModalDataDispatchContext, modalDataReducer } from "./contexts/ModalDataContext";
import useApi from "./api/useApi";
import MarqueeList from "./components/molecules/MarqueeList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, dispatch] = useReducer(modalDataReducer, null);
  const { projectsAPI, apiResponseStatus, handleOnSubmitForm, handleApiResponseStatus } = useApi(modalData, handleAutoModalClose);

  function handleAutoModalClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <ModalDataContext.Provider value={modalData}>
        <ModalDataDispatchContext.Provider value={dispatch}>
          <main>
            <Button buttonText="Contact Tzanca Uraganu!" href="https://www.youtube.com/watch?v=0AO2p-xPPEo&ab_channel=TzancaUraganu"/>
            <ProjectList data={projectsAPI} onToggleModal={() => setIsModalOpen(!isModalOpen)} />
            <br />
            <br />
            <br />
            <br />
            <MarqueeList 
                title1="First title"
                title2="Second title"
                title3="Thirdtitle"
                word1="First word"
                word2="Second word"
                word3="Third word"
                buttonImage="https://i1.sndcdn.com/artworks-000021223010-8s64rf-t500x500.jpg"
            />

            <br />
            <br />
            <br />
            <br />
            <footer>Numarul 1 in top</footer>
            
          </main>
          <Modal isOpen={isModalOpen} apiResponseStatus={apiResponseStatus} onToggleModal={() => setIsModalOpen(!isModalOpen)}>
            <ProjectCreate onSubmitForm={handleOnSubmitForm}  onToggleModal={() => setIsModalOpen(!isModalOpen)} />
          </Modal>
        </ModalDataDispatchContext.Provider>
      </ModalDataContext.Provider>
    </>
  )
}

export default App;
