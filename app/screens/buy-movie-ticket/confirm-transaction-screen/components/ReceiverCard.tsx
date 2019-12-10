import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "components"
import { AppInputField } from "components/app-input-field"
import { Card, CardItem } from "native-base"
import { getElevation } from "utils"
import { spacing } from "theme"

interface Props {}

export function ReceiverCard({  }: Props) {
  return (
    <Card style={styles.container}>
      <Text tx="movie_receiverInfo" t1 bold />

      <AppInputField label={"common_name"} />
      <AppInputField label={"common_phone"} />
      <AppInputField label={"common_email"} />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[5],
  },
})

export default ReceiverCard
