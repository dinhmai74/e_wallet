import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Icon, Text } from "components"
import { palette, spacing, metrics } from "theme"
import { RadioButton } from "react-native-material-ui"
import { IconType } from "react-native-elements"
import { TranslateKey } from "i18n/lang"

interface Props {
  icon: IconType
  nameBank: TranslateKey
  numberTalent?: TranslateKey
}

export class ItemBank extends Component<Props, {}> {
  render() {
    const { icon, nameBank, numberTalent } = this.props
    return (
      <View style={{ paddingBottom: spacing[2] }}>
        <View style={styles.container}>
          <Icon icon={icon} size={metrics.images.large} />
          <View style={styles.wraper}>
            <View style={styles.bank}>
              <Text tx={nameBank} style={styles.nameBank} s2 />
              <Text tx={numberTalent} style={styles.talentNumber} s2 />
            </View>
            <Text tx="free" style={styles.free} p3 />
          </View>
          <View style={styles.styleRadioButton}>
            <RadioButton label="" checked value="Value" onSelect={() => {}} />
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
    paddingLeft: spacing[9],
  },
  indicatorStyle: {
    backgroundColor: palette.grey,
    width: 350,
    height: 1,
    marginLeft: spacing[6],
    marginTop: spacing[4],
  },
})

export default ItemBank
