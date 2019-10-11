import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, Image, StyleSheet } from "react-native"
import { Screen } from "components/screen"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "components"
import InputPhoneNumber from "screens/transfer/transfer-phone-number/input-phone-number"
import { spacing } from "theme"

export interface TransferPhoneNumber extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
}

// @inject("mobxstuff")
@observer
export class TransferPhoneNumber extends React.Component<any, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="titleTransferPhoneNumber" />
        <InputPhoneNumber />
      </Screen>
    )
  }
}

const styles = StyleSheet.create({})
