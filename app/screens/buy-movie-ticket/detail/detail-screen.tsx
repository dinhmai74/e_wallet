import * as React from "react"
import { observer } from "mobx-react"
import { NavigationScreenProps } from "react-navigation"
import { ViewStyle } from "react-native"
import { View, Screen, Header, SizedBox, Text } from "components"
import { AppLoading } from "components/app-loading"
import {
  MovieDigitalType,
  MovieDimensionType,
  MovieNormalCard,
} from "components/buy-movie-ticket/movie-normal-card"
import { Moment } from "moment"
import { AppYoutube } from "components/app-youtube"
import { spacing } from "theme"
import { Card, Icon, Tab, TabHeading, Tabs } from "native-base"
import { BuyMovieTicketShowTimeScreen } from "screens/buy-movie-ticket/detail/show-time-screen/show-time-screen"
import { BuyMovieTicketInfoScreen } from "screens/buy-movie-ticket/detail/Info/buy-movie-ticket-info-screen"
import { MovieData, MovieModel } from "screens/buy-movie-ticket/MovieData"

interface Props extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[6],
}

interface State {
  movie: MovieModel
}

// @inject("mobxstuff")
@observer
export class BuyMovieTicketDetailScreen extends React.Component<Props, State> {
  state = {
    movie: undefined,
  }

  componentDidMount() {
    const { navigation } = this.props
    // @ts-ignore
    const id = navigation.getParam("id", "")
    const movies = MovieData.filter(val => val.id === id)

    if (movies.length === 1)
      this.setState({
        movie: movies[0],
      })
  }

  render() {
    const { movie } = this.state
    console.tlog("movie state", movie)
    if (!movie) return <AppLoading isVisible={true} />
    const { id, title, source, digitalType, dimensionType, duration, releaseDate, stars } = movie
    return (
      <View full>
        <Header headerText={title} leftIcon={"back"} />
        <SizedBox h={4} />
        <Screen preset="scroll">
          <AppYoutube />
          <SizedBox h={4} />
          <Screen style={ROOT}>
            <Card>
              <MovieNormalCard
                {...movie}
                haveDivider={false}
                disabled={true}
                containerStyle={{ paddingLeft: spacing[2] }}
              />
            </Card>

            <SizedBox h={4} />

            <Tabs tabBarUnderlineStyle={{ height: 1.5 }}>
              <Tab
                heading={
                  <TabHeading>
                    <Text tx={"movie_showTimes"} />
                  </TabHeading>
                }
              >
                <BuyMovieTicketShowTimeScreen movie={movie} />
              </Tab>
              <Tab
                heading={
                  <TabHeading>
                    <Text tx={"movie_info"} />
                  </TabHeading>
                }
              >
                <BuyMovieTicketInfoScreen movie={movie} />
              </Tab>
            </Tabs>
          </Screen>
        </Screen>
      </View>
    )
  }
}
