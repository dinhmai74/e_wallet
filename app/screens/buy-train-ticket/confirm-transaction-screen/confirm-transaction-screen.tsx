import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { Button, Screen, View, Text, Header, SizedBox, TotalRow } from "components"
import { TrainTicketValueWithPos, InfoFormVal } from "screens/buy-train-ticket/fill-info-screen"
import { TextWithDecoration } from "components/text-with-decoration"
import { WalletSelection } from "components/wallet-selection"
import InfoCard from "screens/buy-train-ticket/confirm-transaction-screen/InfoCard"
import { AppLoading } from "components/app-loading"
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
export class BuyTrainTicketConfirmTransactionScreen extends React.Component<Props, State> {
  state = {
    ticketInfo: undefined,
    passengerInfo: undefined,
  }

  componentDidMount() {
    const { navigation } = this.props
    // @ts-ignore
    const ticketInfo = navigation.getParam("ticketInfo", {})
    // @ts-ignore
    const passengerInfo = navigation.getParam("passengerInfo", {})
    this.setState({
      ticketInfo,
      passengerInfo,
    })
  }

  render() {
    const { ticketInfo, passengerInfo } = this.state
    return (
      <View full>
        <Header headerTx={"buyTrainTicketConfirmTransactionScreen_header"} leftIcon="back" />
        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          <TextWithDecoration tx="trainTicket_wallet" />
          <WalletSelection />
          <SizedBox h={6} />
          <TextWithDecoration tx="trainTicket_ticketInfo" />
          <SizedBox h={6} />
          {!ticketInfo || !passengerInfo ? (
            <AppLoading isVisible={true} />
          ) : (
            <InfoCard ticketInfo={ticketInfo} passengerInfo={passengerInfo} />
          )}
        </Screen>

        <View preset="footerScroll">
          <TotalRow value={`600000`} />
          <SizedBox h={4} />
          <Button
            full
            tx="common_confirm"
            bordered
            onPress={() =>
              navigateService.navigate("BuyTrainTicketSuccessfulScreen", {
                ticketInfo,
                passengerInfo,
              })
            }
          />
        </View>
      </View>
    )
  }
}
