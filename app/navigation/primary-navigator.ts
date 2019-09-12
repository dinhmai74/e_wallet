import { createStackNavigator } from "react-navigation"
import { WelcomeScreen } from "../screens/welcome-screen"
import { DemoScreen } from "../screens/demo-screen"

const RouteConfigs = {
  welcome: { screen: WelcomeScreen },
  demo: { screen: DemoScreen },
}

export const PrimaryNavigator = createStackNavigator(RouteConfigs, {
  headerMode: "none",
})
export type primaryRoute = keyof typeof RouteConfigs
