import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Header, Button, View, TransactionDetail, SizedBox } from "components"
import { Screen, NoteBuyCardInfo } from "components"
import { spacing } from "theme"
import { navigateService } from "utils"
import { WalletSelection } from "components/wallet-selection"
import { TextWithDecoration } from "components/text-with-decoration"

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[3],
}

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
      type: type,
    })
  }

  render() {
    const numberCard = this.props.navigation.getParam("numberCard", {})
    const amount = this.props.navigation.getParam("selected", {})
    const totalCost = this.props.navigation.getParam("totalCost", {})
    const type = this.props.navigation.getParam("type", {})
    console.log("dasdasd", type)
    return (
      <View full>
        <Header
          headerTx="buyPhoneCardInfoTitle"
          style={{ paddingTop: spacing[6] }}
          leftIcon="back"
        />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          <View style={{ marginHorizontal: spacing[5], paddingBottom: spacing[4] }}>
            <TextWithDecoration tx="wallet" />
            <WalletSelection />
          </View>
          <View style={{paddingHorizontal: spacing[5], paddingBottom: spacing[4]}}> 
            <TextWithDecoration tx="info" />
          </View>
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
          <View style={{ paddingHorizontal: spacing[5], paddingTop: spacing[8] }}>
            <Button tx="confirm" full bordered onPress={this.goTransactionSuccess} />
          </View>
        </Screen>
      </View>
    )
  }
}
