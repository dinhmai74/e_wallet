import * as React from "react"
import { View, StyleSheet } from "react-native"
import { Text } from "../text"
import { Card, CardItem, NativeBase } from "native-base"
import { Icon, IconTypes } from "components/icon"
import { color, metrics, spacing } from "theme"
import { TranslateKey } from "i18n/lang"
import { Button } from "components/button"

interface Props extends NativeBase.CardItem {
  icon: IconTypes
  tx: TranslateKey
  onPress: () => void
  dividerColor?: string
}
export class ItemHomeCard extends React.Component<Props> {
  static defaultProps = {
    dividerColor: "#ec7836",
  }
  render() {
    // grab the props
    const { icon, tx, dividerColor: dividerColorProps, onPress, ...rest } = this.props
    const dividerColor = { backgroundColor: dividerColorProps }

    return (
      <Card style={styles.cardItem}>
        <CardItem onPress={onPress} {...rest} style={styles.cardItem}>
          <View style={[styles.borderLeft, dividerColor]} />
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Icon icon={icon} size={metrics.icon.big} />
            <Text tx={tx} style={{ textAlign: "center", paddingLeft: spacing[2] }} p4 />
          </View>
          <Button transparent style={{ justifyContent: "flex-end", flex: 1 }}>
            <Icon icon="iconFoward" />
          </Button>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  borderLeft: {
    position: "absolute",
    left: 0,
    top: 10,
    bottom: 10,
    width: 1,
  },
  cardItem: {
    paddingVertical: spacing[1],
  },
})
