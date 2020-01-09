import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Header, View, SizedBox, DenominationCard } from "components"
import { Screen } from "components"
import { spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import PromotionSearch from "screens/promotion-screen/promotion-search/promotion-search"
import CategoryCard from "screens/buy-phone-card-screen/category-card/category-card"

export interface BuyPhoneCardScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[5],
}
@observer
export class BuyPhoneCardScreen extends React.Component<BuyPhoneCardScreenProps, {}> {
  render() {
    return (
      <View full>
        <Header headerTx="buyPhoneCard" leftIcon="back" />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          <PromotionSearch />
          <CategoryCard />
          <DenominationCard titlePhoneCard="buyPhoneCard" />
        </Screen>
      </View>
    )
  }
}
