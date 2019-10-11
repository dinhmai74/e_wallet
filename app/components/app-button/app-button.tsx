import React, { Component } from "react"
import { Button } from "components/button"
import { Text } from "components/text"
import { StyleSheet } from "react-native"
import { palette, spacing } from "theme"

export class AppButton extends Component<any, {}> {
  render() {
    const { onPress, style, ...rest } = this.props
    return (
      <Button
        style={[
          style,
          {
            borderRadius: 8,
            borderColor: palette.warmPink,
            borderWidth: 1,
            // marginHorizontal: spacing[6],
            marginBottom: spacing[6],
          },
        ]}
        transparent
        onPress={onPress}
        {...rest}
      >
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
