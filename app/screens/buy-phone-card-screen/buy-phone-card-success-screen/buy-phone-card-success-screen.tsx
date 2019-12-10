import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, Header, Button, View, TransactionDetail, TransactionSuccessfull, SizedBox } from "components"
import { Screen } from "components"
import { spacing } from "theme"
import NoteBuyPhoneCardInfo from "screens/buy-phone-card-screen/buy-phone-card-info-screen/note-buy-phone-card-info"
import { navigateService } from "utils"

const ROOT: ViewStyle = {}

// @inject("mobxstuff")
@observer
export class BuyPhoneCardSuccessScreen extends React.Component<any, {}> {
  goBackBuyCard = () => {
    navigateService.navigate("buyPhoneCardScreen")
  }

  render() {
    const numberCard = this.props.navigation.getParam("numberCard", {})
    const amount = this.props.navigation.getParam("amount", {})
    const totalCost = this.props.navigation.getParam("totalCost", {})
    return (
      <View full>
         <Header
            headerTx="titleBuyPhoneCardSuccessScreen"
            leftIcon="back"
          />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6}/>
          <TransactionSuccessfull
            titleInfo="transactionInfo"
            labelLineFirst="transactionType"
            titleLineFirst="buyPhoneCard"
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
