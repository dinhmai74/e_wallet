import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, Header } from "components"
import { Screen } from "components"
import { spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { PromotionScreen } from "screens/promotion-screen"
import DenominationCard from "screens/buy-phone-card-screen/denomination-card/denomination-card"
import { CardDiscount } from "screens/buy-game-card-screen/select-game-card-screen/component/card-discount"

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[3],
}

// @inject("mobxstuff")
@observer
export class SelectGameCardScreen extends React.Component<any, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Header headerTx="buyCardGarena" leftIcon="back" />
        <CardDiscount />
        <DenominationCard />
      </Screen>
    )
  }
}
