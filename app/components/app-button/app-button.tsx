import React, { Component } from "react"
import { Button } from "components/button"
import { Text } from "components/text"
import { StyleSheet } from "react-native"
import { palette, spacing } from "theme"

interface Props {
  onPress: () => void
}
export class AppButton extends Component<Props, {}> {
  render() {
    const { onPress } = this.props
    return (
      <Button style={styles.styleButton} transparent onPress={onPress}>
        <Text tx="confirm" style={styles.styleText} />
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  styleButton: {
    borderRadius: 8,
    borderColor: palette.warmPink,
    borderWidth: 1,
    marginHorizontal: spacing[6],
    marginBottom: spacing[6],
  },
  styleText: {
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
  },
})

export default AppButton
