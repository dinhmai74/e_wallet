import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "components"
import { color } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "components"

export interface BuyTrainTicketConfirmTransactionScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
@observer
export class BuyTrainTicketConfirmTransactionScreen extends React.Component<BuyTrainTicketConfirmTransactionScreenProps, {}> {
  render () {
    return (
      <Screen style={ROOT} preset="scroll">
      </Screen>
    )
  }
}
