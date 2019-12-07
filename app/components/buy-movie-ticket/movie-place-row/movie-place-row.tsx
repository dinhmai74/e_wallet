import * as React from "react"
import { View, Text, Divider, Icon, SizedBox } from "components"
import { StyleSheet, TouchableOpacity } from "react-native"
import { color as colors, metrics, spacing } from "theme"

export interface MoviePlaceRowProps {
  title: string
  id: string
  onPress: (id: string) => void
}

export function MoviePlaceRow(props: MoviePlaceRowProps) {
  const { title, onPress, id } = props

  const color = colors.description
  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <View preset={"row"} style={styles.rowWrapper}>
        <Text color={color} text={title} />
        <Icon icon={"iconArrowRight"} color={color} size={metrics.icon.tiny} />
      </View>
      <SizedBox h={2} />
      <Divider color={color} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {},
  rowWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: spacing[2],
    alignItems: "center",
  },
})
