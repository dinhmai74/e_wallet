import { FooterTab } from "components"
import { HomeScreen } from "screens/home-screen"
import { PromotionScreen } from "screens/promotion-screen"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { HistoryScreen } from "screens/history-screen"
import { SettingScreen } from "screens/setting-screen"
import CashScreen from "screens/cash-screen/cash-screen"
import { Transfer } from "screens/transfer/transfer"
import { TransferPhoneNumber } from "screens/transfer/transfer-phone-number/transfer-phone-number"

const BottomTabConfig = {
  home: HomeScreen,
  pricetags: PromotionScreen,
  clock: TransferPhoneNumber,
  person: CashScreen,
}

const NavigationScreen = {
  cash: CashScreen,
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
export type navigationScreenRoute = keyof typeof NavigationScreen
export type primaryRoute = keyof typeof PrimaryRouteConfig | bottomTabRoute | navigationScreenRoute
