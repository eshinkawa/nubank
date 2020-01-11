import React, { ReactElement, Fragment } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  ActivityIndicator,
  Text
} from "react-native";
import {
  ScreenWidth,
  ScreenHeight,
  Colors,
  VertSpacing,
  Flex,
  TextContent
} from "../../../styles/base";
import { currencyBRMask } from "../../../utils/utils";

import ModalOffer from "./modal";
import { IOffer } from "../../../interfaces";
import {
  ImageOfferSection,
  ImageOfferDesc,
  OfferTitle,
  OfferNameText,
  OfferPriceText,
  DescText,
  CodeText,
  PurchaseButton
} from "../styles";

interface IOfferCompProps {
  item: IOffer;
  balance: number;
  modal: boolean;
  setModal: (isOpen: boolean) => void;
  purchase: Function;
  navigateToAccount: () => void;
  mutationLoading: boolean;
  client: Object;
}

const OfferComp = ({
  item,
  balance,
  modal,
  setModal,
  purchase,
  navigateToAccount,
  mutationLoading
}: IOfferCompProps): ReactElement => {
  const {
    id,
    price,
    product: { name, description, image }
  } = item;

  const purchaseCall = () => {
    purchase({ variables: { id } }).then((res: any) => {
      if (res.data.purchase.success) {
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
    }).catch((err: any) => {
        console.log(err);
        Alert.alert('Tivemos problemas tentando processar a sua compra :-(', 'Tente novamente')
    })
  
  }

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
          <OfferNameText color={"#0A0807"} size={24} weight={"regular"}>
            {name}
          </OfferNameText>
          <OfferPriceText color={"#000"} size={24} weight={"semiBold"}>
            {currencyBRMask(price)}
          </OfferPriceText>
        </OfferTitle>
        <View style={{ height: 12 }} />
        <DescText color={"#0A0807"} size={14} weight={"semiBold"}>
          Descrição
        </DescText>
        <DescText color={Colors.darkGreen} size={16} weight={"bold"}>
          {description}
        </DescText>
        <VertSpacing size={12} />
        <CodeText color={"#0A0807"} size={14} weight={"semiBold"}>
          Código do produto
        </CodeText>
        <CodeText color={Colors.darkGreen} size={16} weight={"bold"}>
          {id}
        </CodeText>
      </ImageOfferDesc>
      <TouchableOpacity
        onPress={() => setModal(true)}
        disabled={price > balance}
      >
        <PurchaseButton
          style={{ opacity: price > balance ? 0.3 : 1 }}
          testID={"OfferPurchaseButton"}
        >
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
          testID={"OfferInsufficientFundsText"}
        >
          Saldo insuficiente
        </TextContent>
      )}
      <VertSpacing size={12} />
      {modal && (
        <ModalOffer
          name={name}
          purchase={purchaseCall}
          setModal={setModal}
          price={currencyBRMask(price)}
          mutationLoading={mutationLoading}
          navigateToAccount={navigateToAccount}
          id={id}
          image={image}
        />
      )}
    </Fragment>
  );
};

export default OfferComp;
