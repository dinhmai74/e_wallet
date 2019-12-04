import React, { useEffect, useCallback, useState } from "react"
import { StyleSheet, ViewStyle } from "react-native"
import { ColDivider, Header, Screen, SizedBox, View, Button, showToast } from "components"
import { color, spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import { TotalRow } from "components/total-row"
import { formatMoney, navigateService } from "utils"
import Notice from "screens/buy-train-ticket/select-pos-screen/components/Notice"
import Carriage from "screens/buy-train-ticket/select-pos-screen/components/Carriage"
import Seat from "screens/buy-train-ticket/select-pos-screen/components/Seat"

export interface BuyTrainTicketSelectPosScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing[6],
}

export const BuyTrainTicketSelectPosScreen = (props: BuyTrainTicketSelectPosScreenProps) => {
  const [carriageVal, setCarriageVal] = useState(1)
  const [seatVal, setSeatVal] = useState([])

  // @ts-ignore
  const formVal = props.navigation.getParam("formVal", {})
  const totalSeat = formVal.totalTicket.children + formVal.totalTicket.adult
  const onChangeCarriage = useCallback(val => setCarriageVal(val), [setCarriageVal])
  const onChangeSeat = useCallback(
    val => {
      setSeatVal(pre => {
        if (pre.indexOf(val) > -1) {
          return pre.filter(v => v != val)
        } else {
          // @ts-ignore
          if (pre.length >= totalSeat) {
            showToast("buyTrainTicketSelectPosScreen_youHaveSelectedSufficient", "warning")
            return pre
          }
          return [...pre, val]
        }
      })
    },
    [setSeatVal],
  )

  const totalMoney = seatVal.length * formVal.seatType * 300000

  return (
    <View full>
      <Header headerTx="buyTrainTicketSelectPosScreen_header" leftIcon="back" />
      <Screen style={ROOT}>
        <SizedBox h={5} />
        <View full preset={"row"}>
          <Carriage onPress={onChangeCarriage} value={carriageVal} />
          <ColDivider style={styles.divider} />
          <Seat
            onPress={onChangeSeat}
            selectedSeats={seatVal}
            selectedCarriage={carriageVal.toString()}
          />
        </View>
      </Screen>
      <View style={styles.footer}>
        <Notice />
        <SizedBox h={2} />
        <TotalRow value={`${totalMoney}`} />
        <SizedBox h={4} />
        <Button
          tx={"common_confirm"}
          full
          disabled={seatVal.length < totalSeat}
          onPress={() =>
            navigateService.navigate("BuyTrainTicketFillInfoScreen", {
              formVal: { ...formVal, seatVal },
            })
          }
        />
        <SizedBox h={4} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: spacing[6],
    marginHorizontal: spacing[5],
  },
  footer: {
    margin: spacing[6],
  },
})
