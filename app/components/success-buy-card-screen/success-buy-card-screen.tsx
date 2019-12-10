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

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
const ROOT: ViewStyle = {}

// @inject("mobxstuff")

interface Props {
  goPhoneCardScreen: string
  goGameCardScreen: string,
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export class SuccessBuyCardScreen extends React.Component<Props, {}> {
  goBackBuyCard = () => {
    const type = this.props.navigation.getParam("type", {})
    const { goPhoneCardScreen, goGameCardScreen } = this.props
    if (type==="Buy phone card") {
      navigateService.navigate("buyPhoneCardScreen")
    }
    else if (type==="Buy card garena") {
      navigateService.navigate("buyGameCardScreen")
    }
  }

  render() {
    const numberCard = this.props.navigation.getParam("numberCard", {})
    const amount = this.props.navigation.getParam("amount", {})
    const totalCost = this.props.navigation.getParam("totalCost", {})
    const type = this.props.navigation.getParam("type", {})
    return (
      <View full>
        <Header headerTx="titleBuyPhoneCardSuccessScreen" leftIcon="back" />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          <TransactionSuccessfull
            titleInfo="transactionInfo"
            labelLineFirst="transactionType"
            titleLineFirst={type}
            labelLineSecond="denominations"
            titleLineSecond={numberCard}
            labelLineThird="amount"
            titleLineThird={amount}
            labelLineFourth="transactionFee"
            titleLineFourth="free"
            labelLineFifth="totalCost"
            titleLineFifth={totalCost}
          />
          <View style={{ paddingHorizontal: spacing[5], paddingTop: spacing[6] }}>
            <Button tx="buyAnotherCard" full bordered onPress={this.goBackBuyCard} />
          </View>
        </Screen>
      </View>
    )
  }
}
