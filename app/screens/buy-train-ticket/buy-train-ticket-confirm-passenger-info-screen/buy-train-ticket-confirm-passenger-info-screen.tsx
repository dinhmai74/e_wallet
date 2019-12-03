import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import _ from "lodash"
import { NavigationScreenProps } from "react-navigation"

import { color, spacing } from "theme"
import { TrainTicketValueWithPos, InfoFormVal } from "screens/buy-train-ticket/fill-info-screen"
import { TrainInfoCard } from "screens/buy-train-ticket/confirm-passenger-info-screen/components/TrainInfoCard"
import { SizedBox, View, Header, Screen, TotalRow, Button } from "components"
import { PassengerCard } from "screens/buy-train-ticket/confirm-passenger-info-screen/components/PassengerCard"
import { AppLoading } from "components/app-loading"


interface Props extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing[6],
}

interface State {
  ticketInfo?: TrainTicketValueWithPos
  passengerInfo?: InfoFormVal
}

// @inject("mobxstuff")
@observer
export class BuyTrainTicketConfirmPassengerInfoScreen extends React.Component<Props, State> {
  state = {
    ticketInfo: undefined,
    passengerInfo: undefined,
  }

  componentDidMount() {
    const { navigation } = this.props
    // @ts-ignore
    const ticketInfo = navigation.getParam("ticketInfo")
    // @ts-ignore
    const passengerInfo = navigation.getParam("passengerInfo")

    this.setState({
      ticketInfo,
      passengerInfo,
    })
  }

  renderScreen = () => {
    console.tlog(" render")
    const { ticketInfo, passengerInfo } = this.state
    return (
      <>
        <TrainInfoCard data={ticketInfo} />
        <SizedBox h={6} />
        <PassengerCard data={passengerInfo} />
      </>
    )
  }

  render() {
    const { ticketInfo, passengerInfo } = this.state
    let passengers = {}
    if (passengerInfo) {
      passengers = passengerInfo.passengers
    }
    return (
      <View full>
        <Header leftIcon={"back"} headerTx={"buyTrainTicketConfirmPassengerInfoScreen_header"} />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          {ticketInfo && passengerInfo ? this.renderScreen() : <AppLoading isVisible={true} />}
        </Screen>
        <View preset="footer">
          <TotalRow value={(_.size(passengers) * 300000).toString()} />
          <SizedBox h={4} />
          <Button tx="common_confirm" full />
        </View>
      </View>
    )
  }
}
