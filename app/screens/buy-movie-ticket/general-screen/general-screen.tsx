import * as React from "react"
import { observer } from "mobx-react"
import { ScrollView, ViewStyle } from "react-native"
import { Text } from "components/text"
import { Screen } from "components/screen"
import { color, spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { Header, SizedBox, View } from "components"
import { AppSearchBar } from "components/app-search-bar"
import { HotFirmCard } from "components/buy-movie-ticket/hot-firm-card"
import { GeneralCard } from "screens/buy-movie-ticket/general-screen/components/general-card"
import { navigateService } from "utils"

export interface BuyMovieTicketGeneralScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[6],
}

// @inject("mobxstuff")
@observer
export class BuyMovieTicketGeneralScreen extends React.Component<
  BuyMovieTicketGeneralScreenProps,
  {}
> {
  render() {
    return (
      <View full>
        <Header
          headerTx={"buyTrainMovieTicketGeneralScreen_header"}
          leftIcon={"back"}
          style={{
            marginBottom: spacing[4],
          }}
        />
        <Screen preset="fixed">
          <ScrollView showsVerticalScrollIndicator={false}>
            <AppSearchBar
              containerStyle={{ marginHorizontal: spacing[6] }}
              placeholder={"Movie..."}
            />
            <SizedBox h={5} />
            <HotFirmCard
              onPress={id => navigateService.navigate("BuyMovieTicketDetailScreen", { id })}
            />
            <SizedBox h={5} />

            <View style={ROOT}>
              <GeneralCard />
            </View>
          </ScrollView>
        </Screen>
      </View>
    )
  }
}
