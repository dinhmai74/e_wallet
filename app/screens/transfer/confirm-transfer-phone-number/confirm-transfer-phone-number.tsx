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

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
}

// @inject("mobxstuff")
@observer
export class ConfirmTransferPhoneNumber extends React.Component<any, {}> {
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
          <Button tx="confirm" full bordered  style={{backgroundColor: palette.warmPink}} textStyle={{color: palette.white}}/>
        </Screen>
      </View>
    )
  }
}
