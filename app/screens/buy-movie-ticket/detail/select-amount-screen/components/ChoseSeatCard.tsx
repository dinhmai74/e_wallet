import React, { useState, useEffect, useRef, useCallback } from "react"
import _ from "lodash"
import { Icon, icons, showToast, SizedBox, Text, View, Button } from "components"
import { Card, CardItem, Left, Right } from "native-base"
import {
  ModalBaseProps,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacityComponent,
  TouchableOpacity,
} from "react-native"
import Modal, { ModalProps } from "react-native-modal"

import { color, metrics, spacing } from "theme"
import SeatIcon from "screens/buy-train-ticket/select-pos-screen/components/SeatIcon"
import { NoticeRows } from "screens/buy-movie-ticket/detail/select-amount-screen/NoticeRows"
import { useImmer } from "use-immer"
import { useSeat } from "screens/buy-movie-ticket/detail/select-amount-screen/components/useSeat"

interface Props {
  value: string[]
  onSubmit: (val: string) => void
  adult: number
  adultVIP: number
  adultCouple: number
  disabled?: boolean
}

const seatSingleRows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].sort()
const busySeats = ["1-a3", "1-a2", "1-d2", "2-c4", "2-h4", "2-m4", "3-m4", "3-m4"]

const seatAmountPerRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const ChoseSeatCard = (props: Props) => {
  const { value, adult, adultCouple, adultVIP, onSubmit } = props
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(undefined)
  const [selectedSeats, setSeats] = useSeat({
    seats: value,
    amount: {
      adult,
      adultCouple,
      adultVIP,
    },
  })

  useEffect(() => {
    setSeats({
      seats: value,
      type: "init",
      amount: {
        adult,
        adultCouple,
        adultVIP,
      },
    })
  }, [value, adult, adultCouple, adultVIP])

  useEffect(() => {
    if (error)
      setTimeout(() => {
        setError(undefined)
      }, 1000)
  }, [error])

  const renderCardContent = () => {
    return (
      <CardItem>
        <Left>
          <Text tx={"movie_choseSeat"} style={{ flex: 1 }} color={color.description} />
        </Left>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {selectedSeats.seats.map((val, idx) => {
            if (!val) return <Text color={color.textDescription}>Seat...</Text>
            return (
              <Text  key={val}>
                {val}
                {idx < selectedSeats.seats.length - 1 && ", "}
              </Text>
            )
          })}
        </ScrollView>
        <Right>
          <Icon icon={"iconArrowRight"} />
        </Right>
      </CardItem>
    )
  }

  /* ------------- render seats ------------- */
  const renderSeatRow = seatRow => {
    return (
      <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
        {seatAmountPerRow.map((val, index) => {
          let c = color.empty
          const isSelecting = seatRow + val.toString()
          const isVIP = val > 2 && val < 9
          if (val > 2 && val < 9) c = color.vip
          if (busySeats.indexOf(isSelecting) > -1) {
            c = color.busy
          } else if (selectedSeats.seats.indexOf(isSelecting) > -1) {
            c = color.chosen
          }

          let haveSpace = val === 2 || val === 8
          let type = "adult"
          let disable: boolean
          if (isVIP) {
            disable = selectedSeats.amount.adultVIP <= 0
            type = "adultVIP"
          } else {
            disable = selectedSeats.amount.adult <= 0
          }

          return (
            <React.Fragment key={val}>
              <Icon
                icon={"seat"}
                size={metrics.icon.big}
                disabled={disable && c !== color.chosen}
                onPress={() => {
                  if (c === color.busy) {
                    showToast("buyTrainTicketSelectPosScreen_yourSelectingWasBooked")
                  } else {
                    setSeats({ seat: isSelecting, type })
                  }
                }}
                color={c}
                opacityDisable={0.1}
              />
              {haveSpace && <SizedBox w={5} h={1} />}
            </React.Fragment>
          )
        })}
      </View>
    )
  }

  const renderSeats = () => {
    return (
      <View style={{ flex: 1 }}>
        {seatSingleRows.map((val, index) => {
          return (
            <View key={index} preset={"row"} style={styles.row}>
              <View style={styles.rowHeader}>
                <Text color={color.palette.paleGrey} b2 style={{ alignSelf: "center" }}>
                  {val.toUpperCase()}
                </Text>
              </View>
              <SizedBox h={1} w={3} />
              {renderSeatRow(val)}
            </View>
          )
        })}
      </View>
    )
  }

  const renderModalContent = () => {
    console.tlog("selectedSeats", selectedSeats)
    return (
      <View style={styles.modalContent}>
        <Image source={icons.iconScreen} style={styles.iconScreen} />
        <Text tx={"common_screen"} style={{ textAlign: "center" }} color={color.textDescription} />
        {error ? (
          <View style={styles.errorBg}>
            <Text tx={error} color={color.textWhite} style={{ textAlign: "center" }} b2 />
          </View>
        ) : (
          <SizedBox h={4} />
        )}
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {renderSeats()}
        </ScrollView>
        <View>
          <NoticeRows />
          <View preset={"row"}>
            <Text tx={"buyTrainTicketSelectPosScreen_yourChose"} color={color.description} />
            <SizedBox h={1} w={4} />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              {selectedSeats.seats.map((val, idx) => {
                if (!val) return null
                return (
                  <Text key={val}>
                    {val.toString().toUpperCase()}
                    {idx < selectedSeats.seats.length - 1 && ", "}
                  </Text>
                )
              })}
            </ScrollView>
          </View>
          <SizedBox h={4} />
          <Button
            full
            tx={"confirm"}
            onPress={() => {
              onSubmit(selectedSeats.seats)
              setShowModal(false)
            }}
          />
        </View>
      </View>
    )
  }

  const space = 4
  return (
    <Card style={{ opacity: props.disabled ? 0.3 : 1 }}>
      <SizedBox h={space} />
      <TouchableOpacity onPress={() => setShowModal(true)} disabled={props.disabled}>
        {renderCardContent()}
      </TouchableOpacity>
      <SizedBox h={space} />
      <Modal
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        isVisible={showModal}
      >
        {renderModalContent()}
      </Modal>
    </Card>
  )
}

ChoseSeatCard.defaultProps = {
  value: [],
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "space-between",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    padding: 22,
    marginHorizontal: spacing[4],
    marginVertical: spacing[6],
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  iconScreen: {
    width: 270,
    height: 5,
  },
  rowHeader: {
    backgroundColor: "rgba(145, 162, 188, 0.7)",
    borderRadius: 15,
    width: 20,
    height: 20,
  },
  errorBg: {
    backgroundColor: color.brandWarning,
    padding: spacing[2],
  },
  row: { justifyContent: "center", alignItems: "center", marginBottom: spacing[4] },
})
