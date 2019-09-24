import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import Voucher from "./voucher/voucher"
import News from "./news/news"
import PromotionCard from "./promotion-card/promotion-card"
import PromotionSearch from "./promotion-search/promotion-search"



export interface PromotionScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[3]
}

// @inject("mobxstuff")
@observer
export class PromotionScreen extends React.Component<PromotionScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="promotion_header" />
        <PromotionSearch />
        <PromotionCard />
        <Voucher /> 
        <News />
      </Screen>
    )
  }
}
