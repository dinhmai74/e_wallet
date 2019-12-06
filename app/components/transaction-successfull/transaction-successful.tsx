import React, { Component } from "react"
import { View, Image, StyleSheet } from "react-native"
import { Card, CardItem, Left, Right } from "native-base"
import { icons } from "components/icon"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"
import { Text } from "components/text"
import { palette, spacing, color, metrics } from "theme"
import { TranslateKey } from "i18n/lang"
import { Icon, SizedBox } from "components"

interface Props {
  titleInfo?: TranslateKey
  labelLineFirst?: TranslateKey
  titleLineFirst?: TranslateKey
  labelLineSecond?: TranslateKey
  titleLineSecond?: TranslateKey
  labelLineThird?: TranslateKey
  titleLineThird?: TranslateKey
  labelLineFourth?: TranslateKey
  titleLineFourth?: TranslateKey
  labelLineFifth?: TranslateKey
  titleLineFifth?: TranslateKey
  styleCard?: any
}

export class TransactionSuccessfull extends Component<Props, {}> {
  render() {
    const {
      titleInfo,
      labelLineFirst,
      titleLineFirst,
      labelLineSecond,
      titleLineSecond,
      labelLineThird,
      titleLineThird,
      labelLineFourth,
      titleLineFourth,
      labelLineFifth,
      titleLineFifth,
      styleCard,
    } = this.props
    return (
      <View>
        <Card style={{ marginHorizontal: spacing[4] }}>
          <CardItem style={styles.item}>
            <Icon icon={"iconSucces"} size={metrics.images.xl} style={{ alignSelf: "center" }} />
          </CardItem>
          <CardItem style={styles.item}>
            <Text tx={"transactionSuccessfull"} color={color.textGreen} />
          </CardItem>
          <SizedBox h={4} />
        </Card>
        <CardItem style={styles.wrapperContent}>
          <View style={{ paddingTop: spacing[5], paddingBottom: spacing[5] }}>
            <Indicator title={titleInfo} style={{ width: 82 }} />
          </View>
          <View style={styles.inforDetail}>
            <Left>
              <Text tx={labelLineFirst} b1 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx={titleLineFirst} b1 color={palette.navy} />
            </Right>
          </View>
          <View style={styles.inforDetail}>
            <Left>
              <Text tx={labelLineSecond} b1 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx={titleLineSecond} b1 color={palette.navy} />
            </Right>
          </View>
          <View style={styles.inforDetail}>
            <Left>
              <Text tx={labelLineThird} b1 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx={titleLineThird} b1 color={palette.navy} />
            </Right>
          </View>
          <View style={styles.inforDetail}>
            <Left>
              <Text tx={labelLineFourth} b1 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx={titleLineFourth} b1 color={palette.navy} />
            </Right>
          </View>
          {labelLineFifth && titleLineFifth && (
            <View style={styles.inforDetail}>
              <Left>
                <Text tx={labelLineFifth} b1 color={palette.blueGrey} />
              </Left>
              <Right>
                <Text tx={titleLineFifth} b1 color={palette.navy} />
              </Right>
            </View>
          )}
          <View style={{ paddingTop: spacing[2], paddingBottom: spacing[3] }}>
            <Indicator title="walletInfo" style={{ width: 105 }} />
          </View>
          <View style={styles.inforDetail}>
            <Left>
              <Text tx="surPlus" b1 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx="moneyTest" b1 color={palette.navy} />
            </Right>
          </View>
        </CardItem>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  styledCard: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: spacing[4],
  },
  wrapperContent: {
    flexDirection: "column",
  },
  inforDetail: {
    flexDirection: "row",
    paddingBottom: spacing[2],
  },
  item: {
    justifyContent: "center",
  },
})

export default TransactionSuccessfull
