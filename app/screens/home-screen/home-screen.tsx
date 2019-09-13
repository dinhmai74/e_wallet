import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Header, Text } from "components"
import { Screen } from "components"
import { NavigationScreenProps } from "react-navigation"
import { View, Wallpaper } from "components"
import { color } from "theme"
import { Content } from "native-base"

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  flex: 6,
}

// @inject("mobxstuff")
@observer
export class HomeScreen extends React.Component<HomeScreenProps, {}> {
  render() {
    return (
      <View full>
        <Wallpaper linearDirection={"horizontal"} />
        <Screen style={ROOT} backgroundColor={color.transparent}>
          <Header headerTx={"homeScreen_header"} preset={"white"} />
          <Content style={{ backgroundColor: color.background }}>
            <Text preset="header" tx="homeScreen_header" />
          </Content>
        </Screen>
      </View>
    )
  }
}
