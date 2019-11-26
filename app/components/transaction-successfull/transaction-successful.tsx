import React, { Component } from "react"
import { View, Image, StyleSheet } from "react-native"
import { Card, CardItem, Left, Right } from "native-base"
import { icons } from "components/icon"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"
import { Text } from "components/text"
import { palette, spacing } from "theme"
import { TranslateKey } from "i18n/lang"

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
      <View style={{ paddingBottom: spacing[9] }}>
        <Card style={styles.styledCard}>
          <Image source={icons.iconSucces} style={{ paddingBottom: spacing[3] }} />
          <Text
            tx="transactionSuccessfull"
            b1
            color={palette.green}
            style={{ paddingBottom: spacing[4] }}
          />
        </Card>
        <CardItem style={styles.wrapperContent}>
          <Indicator title={titleInfo} style={{ width: 82 }} />
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
          <Indicator title="walletInfo" style={{ width: 105 }} />
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
})

export default TransactionSuccessfull
