import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { View, Text, UnderlineText, SizedBox } from "components"
import { color, spacing } from "theme"
import { ScrollView } from "react-native-gesture-handler"

interface Props {
  onPress?: (val: string) => void
  selectedVal: string
}

const data = [
  "Tokelau",
  "Kuwait",
  "San Marino",
  "Mozambique",
  "Åland Islands",
  "Brunei",
  "Angola",
  "Seychelles",
  "Austria",
  "India",
  "Macedonia",
  "Cyprus",
  "Palestinian Territories",
  "Paraguay",
  "Faroe Islands",
  "Indonesia",
  "Venezuela",
  "Senegal",
  "Nicaragua",
  "France",
  "Lebanon",
]

export function StationModalContent({ onPress, selectedVal }: Props) {
  return (
    <View style={styles.container}>
      <Text t1 tx="trainTicket_choseOriginStation" style={styles.title} />
      <SizedBox h={5} />
      <ScrollView>
        {data.map(val => {
          return (
            <React.Fragment key={val}>
              <SizedBox h={4} />
              <UnderlineText
                text={val}
                hasIcon={selectedVal === val}
                onPress={() => onPress(val)}
              />
            </React.Fragment>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.palette.white,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[6],
    marginVertical: spacing[9],
  },
  title: {
    alignSelf: "center",
    width: "100%",
    textAlign: "center",
  },
})

export default StationModalContent
