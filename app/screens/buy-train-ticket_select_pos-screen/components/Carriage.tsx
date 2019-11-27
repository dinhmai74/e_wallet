import React, { useState } from "react"
import { SizedBox, Text, View } from "components"
import CarriageButton from "screens/buy-train-ticket_select_pos-screen/components/CarriageButton"
import { useEffect, useRef } from "react"
import { StyleSheet } from "react-native"

interface Props {
  onPress?: (val: string) => void
  value?: number
}

const carriages = [1, 2, 3]

const Carriage = ({ value, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Text tx={"buyTrainTicketSelectPosScreen_carriage"} />
      <SizedBox h={4} />
      {carriages.map(val => (
        <View key={val}>
          <CarriageButton text={val.toString()} onPress={onPress} bordered={val != value} />
          <SizedBox h={5} />
        </View>
      ))}
    </View>
  )
}

Carriage.defaultProps = {
  onPress: () => {},
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
})

export default Carriage
