import React, { Component } from "react"
import { Image, StyleSheet, View } from "react-native"
import { CardItem, Card, Thumbnail, Input, Item } from "native-base"
import { icons, Text } from "components"
import { metrics, spacing, palette } from "theme"
import { TranslateKey } from "i18n/lang"

interface Props {
  phoneNumber?: TranslateKey
  amount?: TranslateKey
}


export class AccountInfo extends Component<Props, {}> {
  render() {
    const { phoneNumber, amount } = this.props
    return (
      <Card style={styles.container}>
        <Text tx="AccountInfo" style={styles.title} t1 color={palette.navy} bold />
        <View style={styles.wrapper}>
          <Thumbnail source={icons.beef} large />
          <View style={styles.content}>
            <Text
              tx="name"
              style={{ paddingBottom: spacing[2] }}
              t1
              bold
              color={palette.blueGrey}
            />
            <Text tx={phoneNumber} b1 bold color={palette.blueGrey} />
          </View>
        </View>
        <View style={styles.styleAmount}>
          <Text tx="amount" style={{ paddingRight: spacing[5] }} b1 />
          <View>
            <Text tx={amount} b1 color={palette.blueGrey}/>
            <View style={{ width: 200, height: 1.5, backgroundColor: palette.blueGrey }}></View>
          </View>
        </View>
      </Card>
    )
  }
}

export default AccountInfo

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[7],
  },
  title: {
    fontStyle: "italic",
    paddingTop: spacing[4],
    paddingBottom: spacing[4],
  },
  wrapper: {
    flexDirection: "row",
    paddingBottom: spacing[4],
  },
  content: {
    flexDirection: "column",
    paddingLeft: spacing[3],
    justifyContent: "center",
  },
  styleAmount: {
    flexDirection: "row",
    paddingBottom: spacing[7],
  },
})
