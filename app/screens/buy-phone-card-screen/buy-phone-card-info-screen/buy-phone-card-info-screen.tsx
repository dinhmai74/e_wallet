import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, Header, Button, View, TransactionDetail } from "components"
import { Screen } from "components"
import { spacing } from "theme"
import NoteBuyPhoneCardInfo from "screens/buy-phone-card-screen/buy-phone-card-info-screen/note-buy-phone-card-info"

const ROOT: ViewStyle = {}

// @inject("mobxstuff")
@observer
export class BuyPhoneCardInfoScreen extends React.Component<any, {}> {
  state = {
    numberCard: undefined,
    amount: undefined,
    totalCost: undefined,
  }

  render() {
    const numberCard = this.props.navigation.getParam("numberCard", {})
    const amount = this.props.navigation.getParam("selected", {})
    const totalCost = this.props.navigation.getParam("totalCost", {})
    return (
      <Screen style={ROOT} preset="scroll">
        <Header
          headerTx="buyPhoneCardInfoTitle"
          style={{ paddingTop: spacing[6] }}
          leftIcon="back"
        />
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
          <Button tx="confirm" full bordered />
        </View>
      </Screen>
    )
  }
}
