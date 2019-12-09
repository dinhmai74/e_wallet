import * as React from "react"
import { TextStyle, ViewStyle, StyleSheet } from "react-native"
import { View, Text } from "components"
import { color } from "theme"

export interface MovieInfoTextProps {
  description: string
  title: string
  descriptionStyle?: TextStyle
  titleStyle?: TextStyle
  descriptionColor?: string
}

export function MovieInfoText(props: MovieInfoTextProps) {
  const { description, descriptionStyle, title, titleStyle, descriptionColor } = props

  const dColor = descriptionColor || "rgba(0, 20, 51, 0.6)"

  return (
    <View preset={"row"}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.description, descriptionStyle]} color={dColor}>
        {description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
  },
  description: {
    flex: 3,
  },
})
