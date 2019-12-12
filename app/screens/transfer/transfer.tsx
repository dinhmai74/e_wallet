import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Screen } from "components/screen"
import { spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Text, View, Header } from "components"
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
      <View full>
        <Header headerTx="titleTransfer" leftIcon="back"/>
        <Screen style={ROOT} preset="scroll">
          <BankCard />
          <TextField />
          <InfomationCard />
        </Screen>
      </View>
    )
  }
}
