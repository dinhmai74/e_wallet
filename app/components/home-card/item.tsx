import React, { Component } from "react"
import { CardItem } from "native-base"
import { Icon, IconTypes } from "components/icon"
import { Text } from "components/text"
import { metrics, spacing } from "theme"
import { TranslateKey } from "i18n/lang"

interface Props {
  icon: IconTypes
  tx: TranslateKey
  onPress: () => void
}

export class Item extends Component<Props> {
  render() {
    const { icon, tx, onPress } = this.props
    return (
      <CardItem
        style={{ flexDirection: "column", flex: 1, backgroundColor: "transparent" }}
        onPress={onPress}
      >
        <Icon
          icon={icon}
          size={metrics.icon.normal}
          containerStyle={{ paddingBottom: spacing[3] }}
        />
        <Text tx={tx} style={{ textAlign: "center" }} />
      </CardItem>
    )
  }
}

export default Item
