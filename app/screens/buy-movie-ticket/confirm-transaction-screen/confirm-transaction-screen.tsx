import * as React from "react"
import { observer } from "mobx-react"
import { AppLoading, Button, Screen, View, Text, Header, SizedBox, TotalRow } from "components"
import { color, spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { PlaceModel, MovieModel } from "screens/buy-movie-ticket/MovieData"
import { ViewStyle } from "react-native"
import { navigateService, generalDateFormat } from "utils"
import { TextWithDecoration } from "components/text-with-decoration"
import { WalletSelection } from "components/wallet-selection"
import moment from "moment"
import { InfoCard } from "screens/buy-movie-ticket/confirm-transaction-screen/components/InfoCard"
import ReceiverCard from "screens/buy-movie-ticket/confirm-transaction-screen/components/ReceiverCard"

interface Props extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[6],
  paddingVertical: spacing[4],
}

interface State {
  place: PlaceModel
  movie: MovieModel
  seats: string[]
  totalAmount: number
}

// @inject("mobxstuff")
@observer
export class BuyMovieTicketConfirmTransactionScreen extends React.Component<Props, State> {
  state = {
    place: undefined,
    movie: undefined,
    seats: undefined,
    totalAmount: undefined,
  }

  componentDidMount() {
    const { navigation } = this.props
    // @ts-ignore
    const place = navigation.getParam("place", {})
    // @ts-ignore
    const movie = navigation.getParam("movie", {})
    // @ts-ignore
    const seats = navigation.getParam("seats", {})
    // @ts-ignore
    const totalAmount = navigation.getParam("totalAmount", {})

    this.setState({
      movie,
      place,
      seats,
      totalAmount,
    })
  }

  render() {
    const { place, movie, seats, totalAmount } = this.state
    //@ts-ignore
    const timeId = this.props.navigation.getParam("timeId", "")
    let loading = !place || !movie || !seats || !totalAmount

    if (loading) return <AppLoading isVisible />
    const { source, title, dimensionType, digitalType, duration, releaseDate } = movie
    const { place: placeName } = place

    let room = "Room 1"
    let timeTx = `${moment(releaseDate).format(generalDateFormat)}`
    let filterRoomResult = place.times.filter(val => val.id === timeId)
    if (filterRoomResult.length > 0) {
      room = filterRoomResult[0].roomName
      timeTx += " - "
      timeTx += moment(filterRoomResult[0].time).format("HH : MM")
    }

    return (
      <View full>
        <Header headerTx={"buyTrainTicketConfirmTransactionScreen_header"} leftIcon="back" />
        <Screen style={ROOT} preset="scroll">
          <WalletSelection />
          <SizedBox h={6} />
          <InfoCard
            time={timeTx}
            movieName={title}
            room={room}
            theaters={placeName}
            seats={seats}
          />
          <SizedBox h={6} />
          <ReceiverCard />
        </Screen>

        <View preset="footerScroll">
          <TotalRow value={totalAmount} />
          <SizedBox h={4} />
          <Button
            full
            tx="common_confirm"
            bordered
            onPress={() => {
              navigateService.navigate("BuyMovieTicketTransactionSuccessfulScreen", {
                movie,
                place,
                seats,
                totalAmount,
                time: timeTx,
                room,
              })
            }}
          />
        </View>
      </View>
    )
  }
}
