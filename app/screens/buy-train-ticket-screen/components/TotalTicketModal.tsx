import React, { useState } from "react"
import { StyleSheet } from "react-native"
import Modal from "react-native-modal"
import { color, spacing } from "theme"
import { Button, Text, View, SizedBox } from "components"
import TicketRow from "./TicketRow"
import { TotalTicket } from "screens/buy-train-ticket-screen/buy-train-ticket-screen"

interface Props {
  isVisible: boolean
  onBackdropPress?: () => void
  onBackButtonPress?: () => void
  onSubmit?: (val: any) => void
  value: TotalTicket
}

const TotalTicketModal = ({ value, onSubmit, ...rest }: Props) => {
  const [val, setVal] = useState(value)
  let adult = val ? val.adult : 0
  let children = val ? val.children : 0
  return (
    <Modal style={[styles.modal]} {...rest}>
      <View style={styles.container}>
        <Text t1 tx={"trainTicket_passengers"} style={styles.centerText} />

        <SizedBox h={7} />
        <TicketRow
          value={adult}
          onChange={v => {
            setVal(pre => {
              return { ...pre, adult: v }
            })
          }}
          tx="trainTicket_adult"
        />
        <SizedBox h={5} />
        <TicketRow
          tx="trainTicket_children"
          value={children}
          onChange={v => {
            setVal(pre => {
              return { ...pre, children: v }
            })
          }}
        />
        <SizedBox h={7} />

        <Button
          tx={"common_confirm"}
          bordered={true}
          full={true}
          onPress={() => {
            onSubmit(val)
          }}
        />
      </View>
    </Modal>
  )
}

TotalTicketModal.defaultProps = {
  onSubmit: () => {},
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.white,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[6],
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  centerText: {
    textAlign: "center",
  },
})

export default TotalTicketModal
