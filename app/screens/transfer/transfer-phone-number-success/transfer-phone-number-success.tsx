import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import {
  Text,
  Header,
  Button,
  View,
  TransactionDetail,
  TransactionSuccessfull,
  SizedBox,
} from "components"
import { Screen } from "components"
import { spacing } from "theme"
import { navigateService } from "utils"

import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation"
import { TranslateKey } from "i18n/lang"
const ROOT: ViewStyle = {}

// @inject("mobxstuff")

interface Props {
  goPhoneCardScreen: string
  goGameCardScreen: string
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
  transactionId: string
}
function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4());
}

export class TransferPhoneNumberSuccess extends React.Component<Props, {}> {
  goBackTransferPhoneNumber = () => {
    
    navigateService.navigate("transferPhoneNumber", {
      phoneNumber: " ",
      amount: " ",

    })
  }

  render() {
    const phoneNumber = this.props.navigation.getParam("phoneNumber", {})
    const amount = this.props.navigation.getParam("amount", {})
    return (
      <View full>
        <Header headerTx="titleBuyPhoneCardSuccessScreen" leftIcon="back" />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          <TransactionSuccessfull
            titleInfo="transactionInfo"
            labelLineFirst="yourTransfer"
            titleLineFirst={amount}
            labelLineSecond="to"
            titleLineSecond={phoneNumber}
            labelLineThird="transactionID"
            titleLineThird={guidGenerator()}
          />
          <View style={{ paddingHorizontal: spacing[5], paddingTop: spacing[7] }}>
            <Button
              tx="createNewTransaction"
              full
              bordered
              onPress={this.goBackTransferPhoneNumber}
            />
          </View>
        </Screen>
      </View>
    )
  }
}
