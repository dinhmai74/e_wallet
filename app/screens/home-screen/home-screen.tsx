import * as React from "react"
import { observer } from "mobx-react"
import { TextInput, ViewStyle } from "react-native"
import { Header, View } from "components"
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
class HomeScreen extends React.Component<HomeScreenProps, {}> {
  render() {
    const name = "Dinh mai"
    return (
      <View full>
        <Header headerText={`Hi, ${name}!`} />
        <Screen style={ROOT} backgroundColor={color.transparent} preset="scroll">
          <HomeCard />
          <SegmentedControl />
          <ItemNews />
        </Screen>
      </View>
    )
  }
}

export default HomeScreen
