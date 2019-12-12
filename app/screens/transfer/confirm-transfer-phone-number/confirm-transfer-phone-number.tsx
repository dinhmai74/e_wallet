import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Screen } from "components/screen"
import { NavigationScreenProps } from "react-navigation"
import { Text, View, Header, SizedBox, Button } from "components"
import InputPhoneNumber from "screens/transfer/transfer-phone-number/input-phone-number"
import { spacing, palette, color } from "theme"
import AccountInfo from "./account-info/account-info"
import Message from "./message/message"
import { navigateService } from "utils"

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
}

function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
}

// @inject("mobxstuff")
@observer
export class ConfirmTransferPhoneNumber extends React.Component<any, {}> {
  goTransferPhoneNumberSuccess = () => {
    const phoneNumber = this.props.navigation.getParam("phoneNumber", {})
    const amount = this.props.navigation.getParam("amount", {})
    navigateService.navigate("transferPhoneNumberSuccess", {
      amount: amount,
      phoneNumber: phoneNumber,
      transactionId: guidGenerator()
    })
  }
  render() {
    const phoneNumber = this.props.navigation.getParam("phoneNumber", {})
    const amount = this.props.navigation.getParam("amount", {})
    const transactionDescription = this.props.navigation.getParam("transactionDescription", {})
    return (
      <View full>
        <Header headerTx="titleTransferPhoneNumber" leftIcon="back" />
        <Screen style={ROOT} preset="scroll">
          <AccountInfo phoneNumber={phoneNumber} amount={amount} />
          <Message transactionDescription={transactionDescription} />
          <SizedBox h={9}/>
          <Button tx="confirm" full bordered onPress={this.goTransferPhoneNumberSuccess}  style={{backgroundColor: palette.warmPink}} textStyle={{color: palette.white}}/>
        </Screen>
      </View>
    )
  }
}
