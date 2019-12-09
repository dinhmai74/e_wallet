import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, StyleSheet } from "react-native"
import { Screen, View, Header, SizedBox, Button, TotalRow } from "components"
import { NavigationInjectedProps } from "react-navigation"
import { AppLoading } from "components/app-loading"
import { MovieInfoCard } from "screens/buy-movie-ticket/detail/select-amount-screen/components/movie-info-card"
import { spacing } from "theme"
import { MovieData, MovieModel, PlaceData, PlaceModel } from "screens/buy-movie-ticket/MovieData"
import { AmountCard } from "screens/buy-movie-ticket/detail/select-amount-screen/components/AmountCard"
import { Formik, FormikProps } from "formik"
import * as Yup from "yup"
import _ from "lodash"
import { ChoseSeatCard } from "screens/buy-movie-ticket/detail/select-amount-screen/components/ChoseSeatCard"
import Modal from "react-native-modal"

interface Props extends NavigationInjectedProps<{}> {}
interface State {
  movie: MovieModel
  place: PlaceModel
}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[6],
}

export interface MovieAmountFormModel {
  adult: number
  adultVIP: number
  adultCouple: number
  seat: string[]
}

const initialValues: MovieAmountFormModel = {
  adult: 0,
  adultVIP: 0,
  adultCouple: 0,
  seat: [],
}

const initialErrors = {
  seat: true,
  adult: true,
}

export const MovieTicketRice = {
  adult: 45000,
  adultVIP: 60000,
  adultCouple: 90000,
}

const validationSchema = Yup.object().shape({
  seat: Yup.string().required(),
  adult: Yup.number().test("chose amount", "notChose_amount", function(val) {
    return val > 0 || this.parent.adultVIP > 0 || this.parent.adultCouple > 0
  }),
})

// @inject("mobxstuff")
@observer
export class BuyMovieTicketDetailSelectAmountScreen extends React.Component<Props, State> {
  state = {
    movie: undefined,
    place: undefined,
  }

  componentDidMount() {
    const { navigation } = this.props
    // @ts-ignore
    const movieId = navigation.getParam("movieId", "")
    // @ts-ignore
    const placeId = navigation.getParam("placeId", "")

    const movies = MovieData.filter(val => val.id === movieId)
    const places = PlaceData.filter(val => val.id === placeId)

    if (movies.length > 0) this.setState({ movie: movies[0] })
    if (places.length > 0) this.setState({ place: places[0] })
  }

  /* ------------- methods ------------- */

  onSubmit = (val, bag) => {}

  onAmountChange = (bag: FormikProps<MovieAmountFormModel>, fieldName, val) => {
    const { values, setFieldValue } = bag
    setFieldValue(fieldName, val)
  }

  /* ------------- render ------------- */
  renderContent = (bag: FormikProps<MovieAmountFormModel>) => {
    const { movie, place } = this.state

    const { errors, values } = bag

    const { adultCouple, seat, adultVIP, adult } = values

    // @ts-ignore
    const timeId = this.props.navigation.getParam("timeId", "")
    if (!movie || !place) return <AppLoading isVisible={true} />

    let totalVal =
      adultVIP * MovieTicketRice.adultVIP +
      adultCouple * MovieTicketRice.adultCouple +
      adult * MovieTicketRice.adult

    const disableConfirm = !_.isEmpty(errors)
    const spacing = 6

    return (
      <View full>
        <Header headerText={movie.title} leftIcon={"back"} />
        <Screen style={ROOT} preset={"scroll"}>
          <MovieInfoCard movie={movie} place={place} timeId={timeId} />
          <SizedBox h={spacing} />
          <AmountCard
            value={MovieTicketRice.adult}
            title={"movie_adult"}
            amount={adult}
            onChange={val => this.onAmountChange(bag, "adult", val)}
          />
          <SizedBox h={spacing} />
          <AmountCard
            value={MovieTicketRice.adultVIP}
            title={"movie_adultVIP"}
            amount={adultVIP}
            onChange={val => this.onAmountChange(bag, "adultVIP", val)}
          />
          <SizedBox h={spacing} />
          <AmountCard
            value={MovieTicketRice.adultCouple}
            title={"movie_adultCouple"}
            amount={adultCouple}
            onChange={val => this.onAmountChange(bag, "adultCouple", val)}
          />
          <SizedBox h={spacing} />
          <ChoseSeatCard
            onSubmit={val => {
              bag.setFieldValue("seat", val)
            }}
            value={seat}
            adult={adult}
            adultVIP={adultVIP}
            adultCouple={adultCouple}
            disabled={adultVIP + adult === 0}
          />
          <SizedBox h={spacing} />
        </Screen>

        <View preset={"footerScroll"}>
          <TotalRow value={totalVal + ""} />
          <SizedBox h={4} />
          <Button tx={"confirm"} full disabled={disableConfirm} />
        </View>
      </View>
    )
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmit}
        validationSchema={validationSchema}
        // @ts-ignore
        initialErrors={initialErrors}
      >
        {bag => {
          return this.renderContent(bag)
        }}
      </Formik>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "space-between",
  },
  modalContent: {
    flex: 1,
  },
})
