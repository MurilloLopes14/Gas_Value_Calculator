//* Styles
import {
  ModalStyle,
  BtnContent,
  SubmitBtn,
  ImageStyle,
  ModalContainer,
  Title,
  Text,
  SubTitle,
  CloseBtn,
  CloseBtnContent,
} from "./styles";

//* Hooks
import React, { useState } from "react";

//* Utils
import Gas from "../assets/gas.png";

export const ModalComponent = ({ gas, alchool }) => {
  const [modalState, setModalState] = useState(false);

  const handleSubmit = () => {
    if (gas === "" || alchool === "") return alert("Preencha todos os campos");
    setModalState(true);
  };

  const handleClose = () => {
    setModalState(false);
  };
  return (
    <>
      <SubmitBtn onPress={handleSubmit}>
        <BtnContent>Calcular</BtnContent>
      </SubmitBtn>
      <ModalContainer
        animationType="fade"
        visible={modalState}
        transparent={false}
      >
        <ModalStyle>
          <ImageStyle source={Gas} />
          <Title>
            {gas < alchool ? "Compensa usar Gasolina" : "Compensa usar Álcool"}
          </Title>
          <SubTitle>Com os preços:</SubTitle>
          <Text>Álcool: {alchool}</Text>
          <Text>Gasolina: {gas}</Text>
          <CloseBtn onPress={handleClose}>
            <CloseBtnContent>Calcular novamente</CloseBtnContent>
          </CloseBtn>
        </ModalStyle>
      </ModalContainer>
    </>
  );
};
