import React, { useState } from "react"
import { StyleSheet, Text } from "react-native"
import { color, spacing } from "theme"
import { SizedBox, NoticeSeatRow, View } from "components"

interface Props {}

export const NoticeRows = ({  }: Props) => {
  return (
    <View style={styles.container}>
      <View preset={"row"} style={styles.row}>
        <NoticeSeatRow
          color={color.empty}
          tx={"buyTrainTicketSelectPosScreen_empty"}
          style={styles.item}
        />
        <NoticeSeatRow
          color={color.vip}
          tx={"common_emptySeatVIP"}
          style={styles.item}
        />
      </View>
      <SizedBox h={4} />
      <View preset={"row"} style={styles.row}>

        <NoticeSeatRow
          color={color.busy}
          tx={"buyTrainTicketSelectPosScreen_wasBooked"}
          style={styles.item}
        />
        <NoticeSeatRow
          color={color.chosen}
          tx={"buyTrainTicketSelectPosScreen_yourChose"}
          style={styles.item}
        />
      </View>
      <SizedBox h={4} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing[5],
  },
  row: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  item: {
    alignSelf: "stretch",
    flex: 1,
  },
})
