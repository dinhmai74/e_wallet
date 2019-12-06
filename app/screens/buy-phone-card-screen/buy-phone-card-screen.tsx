import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, Header } from "components"
import { Screen } from "components"
import { spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { PromotionScreen } from "screens/promotion-screen"
import PromotionSearch from "screens/promotion-screen/promotion-search/promotion-search"
import CategoryCard from "screens/buy-phone-card-screen/category-card/category-card"
import DenominationCard from "screens/buy-phone-card-screen/denomination-card/denomination-card"

export interface BuyPhoneCardScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[3],
}

// @inject("mobxstuff")
@observer
export class BuyPhoneCardScreen extends React.Component<BuyPhoneCardScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Header headerTx="buyPhoneCard" style={{ paddingTop: spacing[6] }} leftIcon="back" />
        <PromotionSearch />
        <CategoryCard />
        <DenominationCard />
      </Screen>
    )
  }
}