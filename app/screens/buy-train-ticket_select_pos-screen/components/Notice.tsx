import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { color, spacing } from "theme"
import { NoticeRow } from "screens/buy-train-ticket_select_pos-screen/components/NoticeRow"
import { SizedBox } from "components"

interface Props {}

export const Notice = ({  }: Props) => {
  return (
    <View style={styles.container}>
      <NoticeRow color={color.empty} tx={"buyTrainTicketSelectPosScreen_empty"} />
      <SizedBox h={4} />
      <NoticeRow color={color.busy} tx={"buyTrainTicketSelectPosScreen_wasBooked"} />
      <SizedBox h={4} />
      <NoticeRow color={color.chosen} tx={"buyTrainTicketSelectPosScreen_yourChose"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing[5],
  },
})

export default Notice
