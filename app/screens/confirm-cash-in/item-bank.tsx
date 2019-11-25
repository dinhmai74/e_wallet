import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Icon, Text, IconTypes } from "components"
import { palette, spacing, metrics } from "theme"
import { TranslateKey } from "i18n/lang"
import { RadioButton } from "react-native-material-ui"

interface Props {
  icon: IconTypes
  nameBank: TranslateKey
  numberTalent?: TranslateKey
}
interface State {
  checked: boolean
}

export class ItemBank extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }
  render() {
    const { icon, nameBank, numberTalent } = this.props
    const { checked } = this.state

    return (
      <View style={{ paddingBottom: spacing[2] }}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Icon icon={icon} size={metrics.icon.large} />
            <View style={styles.wraper}>
              <View style={styles.bank}>
                <Text tx={nameBank} style={styles.nameBank} b1 />
                <Text tx={numberTalent} style={styles.talentNumber} b1 />
              </View>
              <Text tx="free" style={styles.free} b1 />
            </View>
          </View>
          <View style={styles.styleRadioButton}>
            <RadioButton
              label=""
              checked={this.state.checked}
              value="Value"
              onCheck={checked => this.setState({ checked })}
              onSelect={() => {}}
              color="blue"
            />
          </View>
        </View>
        <View style={styles.indicatorStyle}></View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // paddingLeft: spacing[5],
    paddingHorizontal: spacing[6],
    paddingTop: spacing[3],
  },
  wraper: {
    flexDirection: "column",
    paddingLeft: spacing[4],
  },
  bank: {
    flexDirection: "row",
    paddingBottom: spacing[2],
  },
  nameBank: {
    color: palette.black,
    paddingRight: spacing[3],
  },
  talentNumber: {
    color: palette.brownGrey,
  },
  free: {
    color: palette.green,
  },
  styleRadioButton: {
    paddingLeft: 80,
    justifyContent: "flex-start",
    // alignItems: "center",
    flex: 1,
  },
  indicatorStyle: {
    backgroundColor: palette.grey,
    width: 300,
    height: 1,
    marginLeft: spacing[6],
    marginTop: spacing[4],
  },
})

export default ItemBank
