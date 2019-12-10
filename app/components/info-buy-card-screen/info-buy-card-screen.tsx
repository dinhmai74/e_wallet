import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, Header, Button, View, TransactionDetail, SizedBox } from "components"
import { Screen, NoteBuyCardInfo } from "components"
import { spacing } from "theme"
import { navigateService } from "utils"

const ROOT: ViewStyle = {}

// @inject("mobxstuff")
@observer
export class InfoBuyCardScreen extends React.Component<any, {}> {
  goTransactionSuccess = () => {
    const numberCard = this.props.navigation.getParam("numberCard", {})
    const amount = this.props.navigation.getParam("selected", {})
    const totalCost = this.props.navigation.getParam("totalCost", {})
    const type = this.props.navigation.getParam("type", {})
    navigateService.navigate("buyPhoneCardSuccessScreen", {
      numberCard: numberCard,
      amount: amount,
      totalCost: totalCost,
      type: type
    })
  }

  render() {
    const numberCard = this.props.navigation.getParam("numberCard", {})
    const amount = this.props.navigation.getParam("selected", {})
    const totalCost = this.props.navigation.getParam("totalCost", {})
    const type = this.props.navigation.getParam("type", {});
    console.log("dasdasd", type);
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
          <NoteBuyCardInfo />
          <View style={{ paddingHorizontal: spacing[5], paddingTop: spacing[7] }}>
            <Button tx="confirm" full bordered onPress={this.goTransactionSuccess} />
          </View>
        </Screen>
      </View>
    )
  }
}
