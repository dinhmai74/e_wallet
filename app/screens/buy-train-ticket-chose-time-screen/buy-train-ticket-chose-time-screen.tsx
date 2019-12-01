import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text, Screen, View, Header, SizedBox, Icon, Button } from "components"
import { color, metrics, spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import {
  ChoseTimeCard,
  TimeValue,
} from "screens/buy-train-ticket-chose-time-screen/components/ChoseTimeCard"
import { navigateService } from "utils"

interface Props extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing[6],
  paddingVertical: spacing[4],
}

export const buyTrainTimeData: TimeValue[] = [
  { number: "SE111", time: "6:00 - 15:33 ( 33h 33’)", id: "1" },
  { number: "SE205", time: "6:00 - 15:33 ( 33h 33’)", id: "2" },
  { number: "SE208", time: "7:00 - 14:33 ( 32h33')", id: "3" },
]

interface State {
  selectedTrainId?: string
}

// @inject("mobxstuff")
@observer
export class BuyTrainTicketChoseTimeScreen extends React.Component<Props, State> {
  state = {
    selectedTrainId: undefined,
  }

  render() {
    const { selectedTrainId } = this.state
    return (
      <View full>
        <Header leftIcon={"back"} headerTx={"buyTrainTicketChoseTimeScreen_header"} />
        <Screen style={ROOT} preset={"scroll"}>
          {this.renderCard()}
          {this.renderFillImage()}
        </Screen>
        <View preset={"footer"}>
          <Button tx={"common_confirm"} full disabled={!selectedTrainId} onPress={this.onConfirm} />
        </View>
      </View>
    )
  }

  renderCard(): React.ReactNode {
    const { selectedTrainId } = this.state
    return buyTrainTimeData.map((val, index) => {
      return (
        <React.Fragment key={index}>
          <ChoseTimeCard
            value={val}
            onPress={this.onPress}
            isSelected={selectedTrainId === val.id}
          />
          <SizedBox h={4} />
        </React.Fragment>
      )
    })
  }

  renderFillImage() {
    if (buyTrainTimeData.length < 3) return null
    return (
      <Icon icon={"mapDark"} size={metrics.images.giant} containerStyle={{ alignSelf: "center" }} />
    )
  }

  /* ------------- methods ------------- */

  onPress = (val: TimeValue) => {
    this.setState({
      selectedTrainId: val.id,
    })
  }

  onConfirm = () => {
    const { selectedTrainId } = this.state
    // @ts-ignore
    const formVal = this.props.navigation.getParam("formVal", {})
    navigateService.navigate("BuyTrainTicketSelectPosScreen", {
      formVal: { ...formVal, selectedTrainId },
    })
  }
}
