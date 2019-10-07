import React, { Component } from "react"
import { CardItem, Card } from "native-base"
import { Text } from "components"
import { StyleSheet } from "react-native"
import { palette, spacing } from "theme"
import { TranslateKey } from "i18n/lang"
interface Props {
  title: TranslateKey
  style?: any
}
export class ItemMoney extends Component<Props, {}> {
  render() {
    const { title, style, ...rest } = this.props
    return (
      <Card style={[style, styles.container]} {...rest}>
        <CardItem>
          <Text tx={title} style={styles.styledText} s1 />
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 115,
    height: 62,
    borderRadius: 10,
    borderColor: palette.warmPink,
    marginLeft: 39,
    marginTop: spacing[6],
    alignItems: "center",
    justifyContent: "center",
  },
  styledText: {
    textAlign: "center",
    color: palette.warmPink,
  },
})

export default ItemMoney
