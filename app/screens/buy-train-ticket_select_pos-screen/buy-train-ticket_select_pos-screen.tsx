import React, { useEffect, useCallback, useState } from "react"
import { StyleSheet, ViewStyle } from "react-native"
import { ColDivider, Header, Screen, SizedBox, View, Button } from "components"
import { color, spacing } from "theme"
import { NavigationScreenProps } from "react-navigation"
import Carriage from "screens/buy-train-ticket_select_pos-screen/components/Carriage"
import { custom } from "mobx-state-tree/dist/types/utility-types/custom"
import Seat from "screens/buy-train-ticket_select_pos-screen/components/Seat"

export interface BuyTrainTicketSelectPosScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing[6],
}

// @inject("mobxstuff")
export function BuyTrainTicketSelectPosScreen() {
  const [carriageVal, setCarriageVal] = useState(1)
  const [seatVal, setSeatVal] = useState("-1")

  const onChangeCarriage = useCallback(val => setCarriageVal(val), [setCarriageVal])
  const onChangeSeat = useCallback(val => setSeatVal(val), [setSeatVal])

  useEffect(() => {
    setSeatVal("-1")
  }, [carriageVal])

  return (
    <View full>
      <Header headerTx="buyTrainTicketSelectPosScreen_header" leftIcon="back" />
      <Screen style={ROOT} >
        <SizedBox h={5} />
        <View full preset={"row"}>
          <Carriage onPress={onChangeCarriage} value={carriageVal} />
          <ColDivider style={styles.divider} />
          <Seat onPress={onChangeSeat} value={seatVal} />
        </View>
      </Screen>
      <View style={styles.footer}>
        <Button tx={"common_confirm"} full />
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
