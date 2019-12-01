import React, { ReactElement, Fragment } from "react";
import { View, Image, TouchableOpacity, Modal, Alert, ActivityIndicator, Text } from "react-native";
import { ScreenWidth, ScreenHeight, Colors, VertSpacing, Flex, TextContent } from "../../../styles/base";
import { currencyBRMask } from "../../../utils/utils";
import { close } from '../../../../assets';
import { OfferTitle, OfferNameText, OfferPriceText, DescText, CodeText, ModalHeader, ImageOfferSection, ImageOfferDesc, PurchaseButton, ModalContainer, ModalContent, ModalBottomLine, ModalFlexImageText, ConfirmPurchaseButton } from "../styles";

const OfferComp = ({ item, balance, modal, setModal, purchase, navigateToAccount, mutationLoading }): ReactElement => {
  const {
    id,
    price,
    product: { name, description, image }
  } = item;

  console.log(item)

  return (
    <Fragment>
      <ImageOfferSection>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={{ width: ScreenWidth, height: ScreenHeight / 2.5 }}
        />
      </ImageOfferSection>
      <ImageOfferDesc>
        <OfferTitle>
          <OfferNameText
            color={"#0A0807"}
            size={24}
            weight={"regular"}
          >
            {name}
          </OfferNameText>
          <OfferPriceText
            color={"#000"}
            size={24}
            weight={"semiBold"}
          >
            {currencyBRMask(price)}
          </OfferPriceText>
        </OfferTitle>
        <View style={{ height: 12 }} />
        <DescText
          color={"#0A0807"}
          size={14}
          weight={"semiBold"}
        >
          Descrição
        </DescText>
        <DescText
          color={Colors.darkGreen}
          size={16}
          weight={"bold"}
        >
          {description}
        </DescText>
        <VertSpacing size={12} />
        <CodeText
          color={"#0A0807"}
          size={14}
          weight={"semiBold"}
        >
          Código do produto
        </CodeText>
        <CodeText
          color={Colors.darkGreen}
          size={16}
          weight={"bold"}
        >
          {id}
        </CodeText>
      </ImageOfferDesc>
      <TouchableOpacity
        onPress={() => setModal(true)}
        disabled={price > balance}
      >
        <PurchaseButton style={[price > balance && { opacity: 0.3 }]}>
          <TextContent color={"#006DFD"} size={20} weight={"semiBold"}>
            Comprar
          </TextContent>
        </PurchaseButton>
      </TouchableOpacity>
      {price > balance && (
        <TextContent
          color={"#ff6961"}
          size={16}
          weight={"semiBold"}
          style={{ textAlign: "center", marginTop: 4 }}
        >
          Saldo insuficiente
        </TextContent>
      )}
      <VertSpacing size={12} />
      {modal && (
        <Modal animationType="slide" transparent={true} onRequestClose={() => setModal(false)}>
          <ModalContainer>
            <Flex size={0.5} />
            <ModalContent>
              <TouchableOpacity onPress={() => setModal(false)}>
                <Image
                  source={close}
                  resizeMode="cover"
                  style={{ width: 30, height: 30, position: 'absolute', bottom: 28, right: 12 }}
                />
              </TouchableOpacity>
              <TextContent color={"#000"} size={24} weight={"regular"}>
                Resumo da compra
              </TextContent>
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
                    style={{ width: '100%', height: 90  }}
                  />
                </Flex>
                <ModalHeader>
                  <TextContent color={"#000"} size={16} weight={"regular"}>
                    Nome: {name}
                  </TextContent>
                  <TextContent color={"#000"} size={16} weight={"regular"}>
                    Preço: {currencyBRMask(price)}
                  </TextContent>
                </ModalHeader>
              </ModalFlexImageText>
              <VertSpacing size={48} />
              <TouchableOpacity disabled={mutationLoading} onPress={() => purchase({ variables: { id } }).then(res => {
                  console.log(res.data)
                  if (res.data.purchase.success){
                    Alert.alert('Compra realizada com sucesso!', '',
                    [
                      {
                        text: 'OK', onPress: () => {
                          navigateToAccount()
                      }
                      },
                    ])
                  } else {
                    Alert.alert('Tivemos problemas tentando processar a sua compra :-(', 'Tente novamente')
                  }
                }).catch(err => {
                  console.log(err);
                  Alert.alert('Tivemos problemas tentando processar a sua compra :-(', 'Tente novamente')
                })
              }>
                <ConfirmPurchaseButton>
                  {!mutationLoading ? <TextContent color={"#fff"} size={20} weight={"regular"}>
                    Comprar
                  </TextContent> : <ActivityIndicator size="small" color='#fff'/>}
                </ConfirmPurchaseButton>
              </TouchableOpacity>
            </ModalContent>
            <Flex size={0.5} />
          </ModalContainer>
        </Modal>
      )}
    </Fragment>
  );
};

export default OfferComp;
