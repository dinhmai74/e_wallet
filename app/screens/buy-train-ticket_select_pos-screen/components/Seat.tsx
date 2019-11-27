import React, { useState, useEffect } from "react"
import { Text, View } from "components"
import SeatIcon from "screens/buy-train-ticket_select_pos-screen/components/SeatIcon"
import { SizedBox } from "components"
import { metrics, color } from "theme"
import { ScrollView } from "react-native"

interface Props {
  value?: string
  onPress?: (val: string) => void
}

const seats = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
].sort()

const seatDetails = [1, 2, 3, 4]

const Seat = ({ value, onPress }: Props) => {
  const renderRow = (seatRow: string) => {
    return (
      <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
        {seatDetails.map((val, index) => {
          let isSelected = false
          let c = color.empty
          let selectedSeatDetail = value.toString().substr(1)
          if (value[0] === seatRow && val.toString() == selectedSeatDetail) {
            c = color.chosen
          }

          return (
            <React.Fragment key={val}>
              <SeatIcon
                style={{ flex: 1, alignSelf: "stretch" }}
                size={metrics.icon.big}
                onPress={() => onPress(seatRow + val)}
                color={c}
              />
              {val % 2 === 0 && <SizedBox w={5} />}
            </React.Fragment>
          )
        })}
      </View>
    )
  }

  const renderSeats = () => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {seats.map((val, index) => {
          return (
            <React.Fragment key={index}>
              {renderRow(val)}
              <SizedBox h={7} />
            </React.Fragment>
          )
        })}
      </View>
    )
  }

  return (
    <View full>
      <Text tx={"buyTrainTicketSelectPosScreen_seatPos"} />
      <SizedBox h={5} />
      <ScrollView>{renderSeats()}</ScrollView>
    </View>
  )
}

Seat.defaultProps = {
  onPress: () => {},
}

export default React.memo(Seat)
