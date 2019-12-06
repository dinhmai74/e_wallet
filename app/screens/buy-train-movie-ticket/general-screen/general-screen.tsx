import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "components/text"
import { Screen } from "components/screen"
import { color, spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { Header, SizedBox, View } from "components"
import { AppSearchBar } from "components/app-search-bar"
import { HotFirmCard } from "components/buy-movie-ticket/hot-firm-card"
import { GeneralCard } from "screens/buy-train-movie-ticket/general-screen/components/general-card"

export interface BuyTrainMovieTicketGeneralScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[6],
}

// @inject("mobxstuff")
@observer
export class BuyTrainMovieTicketGeneralScreen extends React.Component<
  BuyTrainMovieTicketGeneralScreenProps,
  {}
> {
  render() {
    return (
      <View full>
        <Header
          headerTx={"buyTrainMovieTicketGeneralScreen_header"}
          leftIcon={"back"}
          style={{
            marginBottom: spacing[2],
          }}
        />
        <Screen preset="scroll">
          <AppSearchBar
            containerStyle={{ marginHorizontal: spacing[6] }}
            placeholder={"Movie..."}
          />
          <SizedBox h={5} />
          <HotFirmCard />
          <SizedBox h={5} />

          <View style={ROOT}>
            <GeneralCard />
          </View>
        </Screen>
      </View>
    )
  }
}
