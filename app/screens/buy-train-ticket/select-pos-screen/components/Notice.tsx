import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { color, spacing } from "theme"
import { SizedBox, NoticeSeatRow } from "components"

interface Props {}

export const Notice = ({  }: Props) => {
  return (
    <View style={styles.container}>
      <NoticeSeatRow color={color.empty} tx={"buyTrainTicketSelectPosScreen_empty"} />
      <SizedBox h={4} />
      <NoticeSeatRow color={color.busy} tx={"buyTrainTicketSelectPosScreen_wasBooked"} />
      <SizedBox h={4} />
      <NoticeSeatRow color={color.chosen} tx={"buyTrainTicketSelectPosScreen_yourChose"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing[5],
  },
})

export default Notice
