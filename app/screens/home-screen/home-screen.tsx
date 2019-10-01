import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Header } from "components"
import { Screen } from "components"
import { NavigationScreenProps } from "react-navigation"
import { color, spacing } from "theme"
import { HomeCard } from "components/home-card"
import { SegmentedControl } from "components/segmented-control"
import ItemNews from "./item-news"

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  // flex: 6,
  paddingHorizontal: spacing[3],
}

// @inject("mobxstuff")
@observer
export class HomeScreen extends React.Component<HomeScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
        <Header headerTx={"homeScreen_header"} />
        <HomeCard />
        <SegmentedControl />
        <ItemNews />
      </Screen>
    )
  }
}
