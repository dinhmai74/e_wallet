import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, Image, StyleSheet } from "react-native"
import { Screen } from "components/screen"
import { spacing, palette } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "components"
import BankCard from "screens/transfer/bank-card"
import TextField from "screens/transfer/text-field"
import InfomationCard from "screens/transfer/infomation-card"

export interface SettingScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[5],
}

// @inject("mobxstuff")
@observer
export class Transfer extends React.Component<SettingScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="titleTransfer" />
        <BankCard />
        <TextField />
        <InfomationCard />
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  styleImage: {
    height: 130,
    width: null,
    flex: 1,
    borderRadius: 5,
    marginTop: spacing[4],
    marginBottom: spacing[6],
  },
  styleButton: {
    borderRadius: 10,
    borderColor: palette.warmPink,
    borderWidth: 0.5,
  },
  styleText: {
    textAlign: "center",
    flex: 1,
  },
})
