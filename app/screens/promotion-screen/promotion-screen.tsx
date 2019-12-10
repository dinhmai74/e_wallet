import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, View, Header } from "components"
import { Screen } from "components"
import { spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import Voucher from "./voucher/voucher"
import News from "./news/news"
import PromotionCard from "./promotion-card/promotion-card"
import PromotionSearch from "./promotion-search/promotion-search"

export interface PromotionScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[3],
  paddingTop: spacing[3],
}

// @inject("mobxstuff")
@observer
export class PromotionScreen extends React.Component<PromotionScreenProps, {}> {
  render() {
    return (
      <View full>
        <Header headerTx="promotion_header" />
        <Screen style={ROOT} preset="scroll">
          <PromotionSearch />
          <PromotionCard />
          <Voucher />
          <News />
        </Screen>
      </View>
    )
  }
}
