import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import Info from "./info"
import ItemSelection from "./item-selection"
import AllItem from "./all-item"

export interface SettingScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  paddingHorizontal: spacing[3]
}

// @inject("mobxstuff")
@observer
export class SettingScreen extends React.Component<SettingScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="settingScreen.header" />
        <Info />
        <AllItem />
      </Screen>
    )
  }
}
