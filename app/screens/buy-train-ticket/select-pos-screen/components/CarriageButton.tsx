import React, { useState } from "react"
import { Button, ButtonProps } from "components"
import { StyleSheet } from "react-native"

interface Props extends Omit<ButtonProps, "onPress"> {
  onPress?: (val: string) => void
}

// eslint-disable-next-line react/display-name
const CarriageButton = React.memo(({ onPress, text, ...rest }: Props) => {
  return (
    <Button style={styles.container} full text={text} onPress={() => onPress(text)} {...rest} />
  )
})

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 100,
    borderRadius: 10,
  },
})

export default CarriageButton
