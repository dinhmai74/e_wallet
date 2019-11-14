import React, { Component } from "react"
import { CardItem, Card } from "native-base"
import { Text } from "components"
import { StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native"
import { palette, spacing, color } from "theme"
import { TranslateKey } from "i18n/lang"
import { colors } from "react-native-elements"
interface Props {
  title: TranslateKey
  style?: any
  onPress?: () => void
}
interface States {
  colorItem: boolean
}

export class ItemMoney extends Component<Props, States> {
  static defaultProps = {
    onPress: () => {},
  }

  constructor(props) {
    super(props)
    this.state = {
      colorItem: true,
    }
  }
  choseMoney = () => {
    this.setState({
      colorItem: false,
    })
  }
  render() {
    const { title, style, onPress, ...rest } = this.props
    const { colorItem } = this.state
    const styledItem = colorItem ? styles.container : styles.highlightItem
    return (
      <Card style={[style, styledItem]} {...rest}>
        <CardItem>
          <TouchableOpacity onPress={this.choseMoney}>
            <Text tx={title} style={styles.styledText} s1 />
          </TouchableOpacity>
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
    borderColor: color.border,
    marginLeft: 35,
    marginTop: spacing[6],
    alignItems: "center",
    justifyContent: "center",
  },
  styledText: {
    textAlign: "center",
    color: color.primary,
  },
  highlightItem: {
    width: 115,
    height: 62,
    borderRadius: 10,
    borderColor: color.primary,
    marginLeft: 35,
    marginTop: spacing[6],
    alignItems: "center",
    justifyContent: "center",
  },
})

export default ItemMoney
