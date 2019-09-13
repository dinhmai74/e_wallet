import { FooterTab } from "components"
import { HomeScreen } from "screens/home-screen"
import { PromotionScreen } from "screens/promotion-screen"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { HistoryScreen } from "screens/history-screen"
import { SettingScreen } from "screens/setting-screen"

const BottomTabConfig = {
  home: HomeScreen,
  pricetags: PromotionScreen,
  clock: HistoryScreen,
  person: SettingScreen,
}

const TabScreens = createBottomTabNavigator(BottomTabConfig, {
  tabBarComponent: FooterTab,
})

const PrimaryRouteConfig = {
  primaryTabs: TabScreens,
}

export const PrimaryNavigator = createStackNavigator(PrimaryRouteConfig, {
  headerMode: "none",
})
export type bottomTabRoute = keyof typeof BottomTabConfig
export type primaryRoute = keyof typeof PrimaryRouteConfig | bottomTabRoute
