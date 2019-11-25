import { FooterTab } from "components"
import { HomeScreen } from "screens/home-screen"
import { PromotionScreen } from "screens/promotion-screen"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { HistoryScreen } from "screens/history-screen"
import { SettingScreen } from "screens/setting-screen"
import CashScreen from "screens/cash-screen/cash-screen"
import { Transfer } from "screens/transfer"
import { TransferPhoneNumber } from "screens/transfer/transfer-phone-number/transfer-phone-number"
import ConfirmCashIn from "screens/confirm-cash-in/confirm-cash-in"
import { ScanScreen } from "screens/scan-screen"
import { PayInternet } from "screens/pay-internet/pay-internet"
import { ConfirmTrasactionPayInternet } from "screens/pay-internet/confirm-transaction"

const BottomTabConfig = {
  home: HomeScreen,
  pricetags: PromotionScreen,
  clock: HistoryScreen,
  person: SettingScreen,
}

const NavigationScreen = {
  cash: CashScreen,
}

const TabScreens = createBottomTabNavigator(BottomTabConfig, {
  tabBarComponent: FooterTab,
})

const PrimaryRouteConfig = {
  bottomStack: TabScreens,
  transferATM: Transfer,
  transferPhoneNumber: TransferPhoneNumber,
  cashScreen: CashScreen,
  confirmCashIn: ConfirmCashIn,
  scanScreen: ScanScreen,
  payInternet: PayInternet,
  confrimTransactionPayInternet: ConfirmTrasactionPayInternet,
}

export const PrimaryNavigator = createStackNavigator(PrimaryRouteConfig, {
  headerMode: "none",
})
export type bottomTabRoute = keyof typeof BottomTabConfig
export type navigationScreenRoute = keyof typeof NavigationScreen
export type primaryRoute = keyof typeof PrimaryRouteConfig | bottomTabRoute
