import React, { useState } from "react"
import { Icon, View, Text, IconProps, IconTypes, SizedBox } from "components"
import { color, metrics } from "theme"
import { StyleSheet } from "react-native"

interface Props {
  title: string
  icon: IconTypes
}

export const InfoRow = ({ title, icon }: Props) => {
  return (
    <View preset={"row"} style={styles.infoRow}>
      <Icon icon={icon} color={color.description} size={metrics.icon.small} />
      <SizedBox h={1} w={2} />
      <Text text={title} b2 color={color.textDescription} />
    </View>
  )
}

const styles = StyleSheet.create({
  infoRow: {
    alignItems: "center",
  },
})
