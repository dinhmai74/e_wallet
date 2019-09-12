import { createStackNavigator } from "react-navigation"
import { PrimaryNavigator, primaryRoute } from "./primary-navigator"

const RouteConfigs = {
  primaryStack: { screen: PrimaryNavigator },
}

export const RootNavigator = createStackNavigator(RouteConfigs, {
  headerMode: "none",
  navigationOptions: { gesturesEnabled: false },
})
export type RootRouteName = keyof typeof RouteConfigs | primaryRoute
