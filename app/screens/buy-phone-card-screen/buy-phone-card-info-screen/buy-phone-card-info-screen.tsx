import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, Header, Button, View, TransactionDetail, SizedBox } from "components"
import { Screen } from "components"
import { spacing } from "theme"
import NoteBuyPhoneCardInfo from "screens/buy-phone-card-screen/buy-phone-card-info-screen/note-buy-phone-card-info"
import { navigateService } from "utils"

const ROOT: ViewStyle = {}

// @inject("mobxstuff")
@observer
export class BuyPhoneCardInfoScreen extends React.Component<any, {}> {
  goTransactionSuccess = () => {
    const numberCard = this.props.navigation.getParam("numberCard", {})
    const amount = this.props.navigation.getParam("selected", {})
    const totalCost = this.props.navigation.getParam("totalCost", {})
    navigateService.navigate("buyPhoneCardSuccessScreen", {
      numberCard: numberCard,
      amount: amount,
      totalCost: totalCost,
    })
  }

  render() {
    const numberCard = this.props.navigation.getParam("numberCard", {})
    const amount = this.props.navigation.getParam("selected", {})
    const totalCost = this.props.navigation.getParam("totalCost", {})
    return (
      <View full>
        <Header
          headerTx="buyPhoneCardInfoTitle"
          style={{ paddingTop: spacing[6] }}
          leftIcon="back"
        />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          <TransactionDetail
            labelLineFirst="common_type"
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
          <NoteBuyPhoneCardInfo />
          <View style={{ paddingHorizontal: spacing[5], paddingTop: spacing[7] }}>
            <Button tx="confirm" full bordered onPress={this.goTransactionSuccess} />
          </View>
        </Screen>
      </View>
    )
  }
}
