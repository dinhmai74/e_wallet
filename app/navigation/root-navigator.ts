import { PrimaryNavigator, primaryRoute } from "./primary-navigator"
import { createStackNavigator } from "react-navigation-stack"

const RouteConfigs = {
  primaryStack: { screen: PrimaryNavigator },
}

export const RootNavigator = createStackNavigator(RouteConfigs, {
  headerMode: "none",
  navigationOptions: { gesturesEnabled: false },
})
export type RootRouteName = keyof typeof RouteConfigs | primaryRoute
