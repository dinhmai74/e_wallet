import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import {
  Screen,
  View,
  Header,
  TransactionSuccessfulCard,
  SizedBox,
  Button,
  RowText,
} from "components"
import { spacing } from "theme"
import { TextWithDecoration } from "components/text-with-decoration"
import TicketInfo from "screens/buy-train-ticket/successfull-screen/components/TicketInfo"
import { InfoFormVal, TrainTicketValueWithPos } from "screens/buy-train-ticket"
import { AppLoading } from "components/app-loading"
import _ from "lodash"
import Wallet from "screens/pay-internet/confirm-transaction/wallet"
import { WalletInfo } from "components/wallet-info"
import { navigateService } from "utils"

interface Props extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  paddingHorizontal: spacing[6],
}

// @inject("mobxstuff")
@observer
export class BuyTrainTicketSuccessfulScreen extends React.Component<Props, {}> {
  render() {
    const { navigation } = this.props
    // @ts-ignore
    const ticketInfo: TrainTicketValueWithPos = navigation.getParam("ticketInfo", {})
    // @ts-ignore
    const passengerInfo: InfoFormVal = navigation.getParam("passengerInfo", {})

    console.tlog("ticketInfo", ticketInfo)
    console.tlog("passenger", passengerInfo)
    return (
      <View full>
        <Header headerTx={"buyTrainTicketSuccessfulScreen_header"} leftIcon={"iconClose"} />

        <Screen style={ROOT} preset="scroll">
          <SizedBox h={6} />
          <TransactionSuccessfulCard />
          <SizedBox h={6} />

          {ticketInfo && passengerInfo ? (
            this.renderContent(ticketInfo, _.size(passengerInfo.passengers))
          ) : (
            <AppLoading isVisible={true} />
          )}
        </Screen>

        <View preset={"footer"}>
          <Button
            full
            bordered
            tx={"common_buyAnotherTicket"}
            onPress={() => navigateService.navigate("BuyTrainTicketScreen")}
          />
        </View>
      </View>
    )
  }

  renderContent = (ticketInfo: TrainTicketValueWithPos, size: number) => (
    <>
      <SizedBox h={6} />
      <TicketInfo ticketInfo={ticketInfo} passengerCounts={size} />
      <SizedBox h={6} />
      <WalletInfo />
    </>
  )
}
