import React, { useState, useEffect } from "react"
import { Text, View } from "components"
import SeatIcon from "screens/buy-train-ticket_select_pos-screen/components/SeatIcon"
import { SizedBox, showToast } from "components"
import { metrics, color } from "theme"
import { ScrollView } from "react-native"

interface Props {
  selectedSeats: string[]
  selectedCarriage: string
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

const busySeats = ["1-a3", "1-a2", "1-d2", "2-c4", "2-h4", "2-m4", "3-m4", "3-m4"]

const seatDetails = [1, 2, 3, 4]

const Seat = ({ selectedCarriage, selectedSeats, onPress }: Props) => {
  const renderRow = (seatRow: string) => {
    return (
      <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
        {seatDetails.map((val, index) => {
          let c = color.empty
          const isSelecting = selectedCarriage + "-" + seatRow + val.toString()
          // eslint-disable-next-line react/prop-types
          if (busySeats.indexOf(isSelecting) > -1) {
            c = color.busy
          }
          // eslint-disable-next-line react/prop-types
          else if (selectedSeats.indexOf(isSelecting) > -1) {
            c = color.chosen
          }

          return (
            <React.Fragment key={val}>
              <SeatIcon
                style={{ flex: 1, alignSelf: "stretch" }}
                size={metrics.icon.big}
                onPress={() => {
                  if (c === color.busy) {
                    showToast("buyTrainTicketSelectPosScreen_yourSelectingWasBooked")
                  } else onPress(selectedCarriage + "-" + seatRow + val.toString())
                }}
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
