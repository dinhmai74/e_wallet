import React, { Component } from "react"
import { View } from "react-native"
import { Card, Left, Right, CardItem } from "native-base"
import { Text } from "components/text"
import { TranslateKey } from "i18n/lang"
import { palette, spacing } from "theme"

export interface Props {
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
}
export class TransactionDetail extends Component<Props, {}> {
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
    } = this.props
    return (
      <Card style={{ flexDirection: "column", marginHorizontal: spacing[6] }}>
        <Text
          tx="transactionDetail"
          style={{ paddingLeft: spacing[5], paddingTop: spacing[4] }}
          t1
          color={palette.navy}
          bold
        />
        <CardItem style={{ flexDirection: "row" }}>
          <Left>
            <Text tx={labelLineFirst} b2 color={palette.blueGrey} />
          </Left>
          <Right>
            <Text tx={titleLineFirst} b2 color={palette.navy} />
          </Right>
        </CardItem>
        <CardItem style={{ flexDirection: "row" }}>
          <Left>
            <Text tx={labelLineSecond} b2 color={palette.blueGrey} />
          </Left>
          <Right>
            <Text b2 color={palette.navy}>
              {titleLineSecond}
            </Text>
          </Right>
        </CardItem>
        <CardItem style={{ flexDirection: "row" }}>
          <Left>
            <Text tx={labelLineThird} b2 color={palette.blueGrey} />
          </Left>
          <Right>
            <Text tx={titleLineThird} b2 color={palette.navy} />
          </Right>
        </CardItem>
        <CardItem style={{ flexDirection: "row" }}>
          <Left>
            <Text tx={labelLineFourth} b2 color={palette.blueGrey} />
          </Left>
          <Right>
            <Text tx={titleLineFourth} b2 color={palette.navy} />
          </Right>
        </CardItem>
        <CardItem style={{ flexDirection: "row" }}>
          <Left>
            <Text tx={labelLineFifth} b2 color={palette.blueGrey} />
          </Left>
          <Right>
            <Text tx={titleLineFifth} b2 color={palette.navy} />
          </Right>
        </CardItem>
      </Card>
    )
  }
}

export default TransactionDetail
