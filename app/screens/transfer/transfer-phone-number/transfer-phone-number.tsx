import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Screen } from "components/screen"
import { NavigationScreenProps } from "react-navigation"
import { Text, View, Header, SizedBox } from "components"
import InputPhoneNumber from "screens/transfer/transfer-phone-number/input-phone-number"
import { spacing } from "theme"

export interface TransferPhoneNumber extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[6],
  paddingVertical: spacing[4]
}

// @inject("mobxstuff")
@observer
export class TransferPhoneNumber extends React.Component<any, {}> {
  render() {
    return (
      <View full>
        <Header headerTx="titleTransferPhoneNumber" leftIcon="back"/>
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={1}/>
          <InputPhoneNumber />
        </Screen>
      </View>
    )
  }
}
