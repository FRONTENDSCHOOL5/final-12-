import React from 'react';
import GlobalStyles from './style/GlobalStyles';
import Router from './routes/Router';
import BottomSheet from './components/ModalUtil/CommonBottomSheet';
import Modal from './components/ModalUtil/CommonModal';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isBottomSheetOpen } from './atom/bottomSheetAtom';
import { isModalOpen } from './atom/modalAtom';

function App() {
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const [isModal, setIsModal] = useRecoilState(isModalOpen);
  return (
    <>
      <GlobalStyles />
      <Router />
      {isBsOpen && <BottomSheet />}
      {isModal && <Modal />}
    </>
  );
}

export default App;
