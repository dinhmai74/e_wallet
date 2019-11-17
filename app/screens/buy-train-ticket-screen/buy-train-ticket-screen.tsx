import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { Checkbox, SizedBox } from "components"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { Header, View } from "components"
import { Card, CardItem } from "native-base"

export interface BuyTrainTicketScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = { paddingHorizontal: spacing[6] }

// @inject("mobxstuff")
@observer
export class BuyTrainTicketScreen extends React.Component<BuyTrainTicketScreenProps, {}> {
  render() {
    return (
      <View full>
        <Header headerTx="trainTicket_title" leftIcon="back" />
        <SizedBox h={4} />
        <Screen style={ROOT} preset="scroll">
          <Card>
            <CardItem style={{ justifyContent: "space-between" }}>
              <Text b1 color={color.textNavy} tx="trainTicket_type" />
              <Checkbox tx="trainTicket_oneWay" value />
              <Checkbox tx="trainTicket_roundTrip" value />
            </CardItem>
          </Card>
        </Screen>
      </View>
    )
  }
}
