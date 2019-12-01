import React from "react"
import { Text } from "components"
import { Card, CardItem } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"
import { color, spacing } from "theme"

export interface TimeValue {
  id: string
  time: string
  number: string
}

interface Props {
  value: TimeValue
  onPress?: (val: TimeValue) => void
  isSelected?: boolean
}

export const ChoseTimeCard = ({ isSelected, value, onPress }: Props) => {
  const { time, number } = value
  const descriptionColor = !isSelected && color.textDescription
  return (
    <TouchableOpacity onPress={() => onPress(value)}>
      {/*
      //@ts-ignore*/}
      <Card selected={isSelected} style={styles.container}>
        <CardItem style={styles.cardItemRow}>
          <Text tx={"common_time"} color={descriptionColor} />
          <Text text={time} preset={"right"} />
        </CardItem>
        <CardItem style={styles.cardItemRow}>
          <Text tx={"common_number"} color={descriptionColor} />
          <Text text={number} preset={"right"} />
        </CardItem>
      </Card>
    </TouchableOpacity>
  )
}

ChoseTimeCard.defaultProps = {
  onPress: () => {},
}

const styles = StyleSheet.create({
  cardItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    paddingVertical: spacing[3],
  },
})
