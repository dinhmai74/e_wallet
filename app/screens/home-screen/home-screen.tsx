import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Header, Text } from "components"
import { Screen } from "components"
import { NavigationScreenProps } from "react-navigation"
import { View, Wallpaper } from "components"
import { color, spacing } from "theme"
import { Content } from "native-base"
import { HomeCard } from "components/home-card"
import { SegmentedControl } from "components/segmented-control"

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  // flex: 6,
  paddingHorizontal: spacing[3]
}

// @inject("mobxstuff")
@observer
export class HomeScreen extends React.Component<HomeScreenProps, {}> {
  render() {
    return (
      <View full>
        <Screen style={ROOT} backgroundColor={color.transparent}>
          <Header headerTx={"homeScreen_header"} preset={"white"} />
          <HomeCard />
          <SegmentedControl />
        </Screen>
        
      </View>
    )
  }
}
