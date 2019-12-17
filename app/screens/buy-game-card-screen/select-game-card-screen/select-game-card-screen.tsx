import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, Header, View, SizedBox, DenominationCard } from "components"
import { Screen } from "components"
import { spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { PromotionScreen } from "screens/promotion-screen"
import { CardDiscount } from "screens/buy-game-card-screen/select-game-card-screen/component/card-discount"

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[5],
}

// @inject("mobxstuff")
@observer
export class SelectGameCardScreen extends React.Component<any, {}> {
  render() {
    return (
      <View full>
        <Header headerTx="buyCardGarena" leftIcon="back" />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          <CardDiscount />
          <DenominationCard titleGameCard="buyGameCardTitle" />
        </Screen>
      </View>
    )
  }
}
