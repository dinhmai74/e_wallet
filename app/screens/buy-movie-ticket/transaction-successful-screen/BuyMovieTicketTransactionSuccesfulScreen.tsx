import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../../components/text"
import { Screen } from "../../../components/screen"
import { color, spacing } from "../../../theme"
import { NavigationScreenProps } from "react-navigation"
import {
  View,
  Header,
  TransactionSuccessfulCard,
  AppLoading,
  SizedBox,
  TotalRow,
  Button,
} from "components"
import { navigateService, generalDateFormat } from "utils"
import { TextWithDecoration } from "components/text-with-decoration"
import { Surplus } from "components/surplus"
import { TicketInfo } from "screens/buy-movie-ticket/transaction-successful-screen/components/TicketInfo"
import moment from "moment"

export interface TransactionSuccessfulScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[6],
  paddingVertical: spacing[4],
}

// @inject("mobxstuff")
@observer
export class BuyMovieTicketTransactionSuccessfulScreen extends React.Component<
  TransactionSuccessfulScreenProps,
  {}
> {
  render() {
    const { navigation } = this.props
    // @ts-ignore
    const place = navigation.getParam("place", undefined)
    // @ts-ignore
    const movie = navigation.getParam("movie", undefined)
    // @ts-ignore
    const seats = navigation.getParam("seats", undefined)
    // @ts-ignore
    const totalAmount = navigation.getParam("totalAmount", undefined)
    // @ts-ignore
    const room = navigation.getParam("room", "")
    // @ts-ignore
    const time = navigation.getParam("time", "")

    let loading = !place || !movie || !seats || !totalAmount
    if (loading) return <AppLoading isVisible />

    const { source, title, dimensionType, digitalType, duration, releaseDate } = movie
    const { place: placeName } = place

    return (
      <View full>
        <Header
          leftIcon="iconClose"
          onLeftPress={() => navigateService.navigate("home")}
          headerTx="transactionSuccessfull"
        />
        <Screen style={ROOT} preset="scroll">
          <TransactionSuccessfulCard />
          <SizedBox h={6} />

          <TextWithDecoration tx="trainTicket_ticketInfo" />
          <SizedBox h={4} />
          <TicketInfo
            movieName={title}
            cost={totalAmount}
            room={room}
            time={time}
            theater={placeName}
            seats={seats}
          />
          <SizedBox h={6} />

          <TextWithDecoration tx="trainTicket_walletInfo" />
          <SizedBox h={4} />
          <Surplus />
        </Screen>
        <View preset="footerScroll">
          <Button
            tx="common_buyAnotherTicket"
            full
            bordered
            onPress={() => navigateService.navigate("BuyMovieTicketGeneralScreen")}
          />
        </View>
      </View>
    )
  }
}
