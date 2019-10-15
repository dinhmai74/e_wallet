import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface HistoryScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
@observer
export class HistoryScreen extends React.Component<HistoryScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="historyScreen_header" />
      </Screen>
    )
  }
}
