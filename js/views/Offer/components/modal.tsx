import React, {  } from "react";

import {
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator} from "react-native";
import {
  ModalHeader,
  ModalContainer,
  ModalContent,
  ModalBottomLine,
  ModalFlexImageText,
  ConfirmPurchaseButton,
  ModalTitleContainer
} from "../styles";
import { TextContent, Flex, VertSpacing } from "../../../styles/base";
import { close } from "../../../../assets";
import { IModalOffer } from "../../../interfaces"

const ModalOffer = ({
  setModal,
  price,
  mutationLoading,
  name,
  purchase,
  image
}: IModalOffer) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModal(false)}
    >
      <ModalContainer testID={"OfferModal"}>
        <Flex size={0.5} />
        <ModalContent>
          <ModalTitleContainer>
            <TextContent color={"#000"} size={24} weight={"regular"}>
              Resumo da compra
            </TextContent>
            <TouchableOpacity onPress={() => setModal(false)}>
              <Image
                source={close}
                resizeMode="cover"
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </ModalTitleContainer>
          <VertSpacing size={24} />
          <TextContent color={"#9DA4AF"} size={18} weight={"regular"}>
            Detalhe da oferta
          </TextContent>
          <ModalBottomLine />
          <VertSpacing size={24} />
          <ModalFlexImageText>
            <Flex size={3}>
              <Image
                source={{ uri: image }}
                resizeMode="cover"
                style={{ width: "100%", height: 90 }}
              />
            </Flex>
            <ModalHeader>
              <TextContent color={"#000"} size={16} weight={"regular"}>
                Nome: {name}
              </TextContent>
              <TextContent color={"#000"} size={16} weight={"regular"}>
                Preço: {price}
              </TextContent>
            </ModalHeader>
          </ModalFlexImageText>
          <VertSpacing size={48} />
          <TouchableOpacity disabled={mutationLoading} onPress={purchase}>
            <ConfirmPurchaseButton>
              {!mutationLoading ? (
                <TextContent color={"#fff"} size={20} weight={"regular"}>
                  Comprar
                </TextContent>
              ) : (
                <ActivityIndicator
                  size="small"
                  color="#fff"
                  testID={"OfferPurchaseButtonSpinner"}
                />
              )}
            </ConfirmPurchaseButton>
          </TouchableOpacity>
        </ModalContent>
        <Flex size={0.5} />
      </ModalContainer>
    </Modal>
  );
};

export default ModalOffer;
