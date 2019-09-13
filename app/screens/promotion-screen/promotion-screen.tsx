import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface PromotionScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {}

// @inject("mobxstuff")
@observer
export class PromotionScreen extends React.Component<PromotionScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="promotion_header" />
      </Screen>
    )
  }
}
