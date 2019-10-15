import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Screen } from "components/screen"
import { spacing } from "../../theme"
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
