import React, { ReactElement, Fragment } from "react";
import { View, Image, TouchableOpacity, Modal, Alert, ActivityIndicator } from "react-native";
import { ScreenWidth, ScreenHeight, Colors } from "../../../styles/base";
import {
  TextContent,
  ImageOfferSection,
  ImageOfferDesc,
  PurchaseButton,
  ModalContainer,
  ModalContent,
  ModalBottomLine,
  ModalFlexImageText,
  ConfirmPurchaseButton
} from "../../UserAccount/styles";
import { currencyBRMask } from "../../../utils/utils";
import { close } from '../../../../assets';

const OfferComp = ({ item, balance, modal, setModal, purchase, navigateToAccount, loading, client }): ReactElement => {
  const {
    id,
    price,
    product: { name, description, image }
  } = item;

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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextContent
            color={"#0A0807"}
            size={24}
            weight={"regular"}
            style={{ textAlign: "left", marginBottom: 8, flex: 1 }}
          >
            {name}
          </TextContent>
          <TextContent
            color={"#000"}
            size={24}
            weight={"semiBold"}
            style={{
              textAlign: "right",
              alignSelf: "center",
              marginBottom: 8,
              flex: 1
            }}
          >
            {currencyBRMask(price)}
          </TextContent>
        </View>
        <View style={{ height: 12 }} />
        <TextContent
          color={"#0A0807"}
          size={14}
          weight={"semiBold"}
          style={{ marginBottom: 8 }}
        >
          Descrição
        </TextContent>
        <TextContent
          color={Colors.darkGreen}
          size={16}
          weight={"bold"}
          style={{ marginBottom: 8 }}
        >
          {description}
        </TextContent>
        <View style={{ height: 12 }} />
        <TextContent
          color={"#0A0807"}
          size={14}
          weight={"semiBold"}
          style={{ marginBottom: 8 }}
        >
          Código do produto
        </TextContent>
        <TextContent
          color={Colors.darkGreen}
          size={16}
          weight={"bold"}
          style={{ marginBottom: 8 }}
        >
          {id}
        </TextContent>
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
      <View style={{ height: 12 }} />
      {modal && (
        <Modal animationType="slide" transparent={true} onRequestClose={() => setModal(false)}>
          <ModalContainer>
            <View style={{ flex: 0.5 }} />
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
              <View style={{ height: 24 }} />
              <TextContent color={"#9DA4AF"} size={18} weight={"regular"}>
                Detalhe da oferta
              </TextContent>
              <ModalBottomLine />
              <View style={{ height: 24 }} />
              <ModalFlexImageText>
                <View style={{ flex: 3 }}>
                  <Image
                    source={{ uri: image }}
                    resizeMode="cover"
                    style={{ width: "100%", height: 90 }}
                  />
                </View>
                <View style={{ flex: 7, marginLeft: 16 }}>
                  <TextContent color={"#000"} size={16} weight={"regular"}>
                    Nome: {name}
                  </TextContent>
                  <TextContent color={"#000"} size={16} weight={"regular"}>
                    Preço: {currencyBRMask(price)}
                  </TextContent>
                </View>
              </ModalFlexImageText>
              <View style={{ height: 32 }} />
              <TouchableOpacity disabled={loading} onPress={() => purchase({ variables: { id } }).then(res => {
                  console.log(res.data)
                  if (res.data.purchase.success){
                    Alert.alert('Compra realizada com sucesso!', '',
                    [
                      { text: 'OK', onPress: () => {
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
                  {!loading ? <TextContent color={"#fff"} size={20} weight={"regular"}>
                    Comprar
                  </TextContent> : <ActivityIndicator size="small" color='#fff'/>}
                </ConfirmPurchaseButton>
              </TouchableOpacity>
            </ModalContent>
            <View style={{ flex: 0.5 }} />
          </ModalContainer>
        </Modal>
      )}
    </Fragment>
  );
};

export default OfferComp;
