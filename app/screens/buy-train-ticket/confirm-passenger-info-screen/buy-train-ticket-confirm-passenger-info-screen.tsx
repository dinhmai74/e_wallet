import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Header, View, SizedBox, Button, TotalRow } from "components"
import _ from "lodash"
import { Screen } from "components"
import { spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { InfoFormVal, TrainTicketValueWithPos } from "screens/buy-train-ticket/fill-info-screen"
import { AppLoading } from "components/app-loading"
import { PassengerCard } from "./components/PassengerCard"
import { TrainInfoCard } from "screens/buy-train-ticket/confirm-passenger-info-screen/components/TrainInfoCard"
import { navigateService } from "utils"

interface Props extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
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
          <Button
            tx="common_confirm"
            full
            onPress={() => {
              navigateService.navigate("BuyTrainTicketConfirmTransactionScreen", {
                ticketInfo,
                passengerInfo,
              })
            }}
          />
        </View>
      </View>
    )
  }
}
