import React, { Component } from "react"
import { View, Image, StyleSheet, ImageBackground } from "react-native"
import { CardItem, Card, Left, Right } from "native-base"
import { Text, icons } from "components"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"
import { spacing, palette } from "theme"

export class InformationCard extends Component {
  render() {
    return (
      <Card>
        <CardItem style={styles.inforInternet}>
          <Text tx="moneyTest" style={styles.money} s1 />
          <Text tx="dateInternet" style={styles.money} s1 />
        </CardItem>
        <View style={styles.styleIndicator} />
        <View />
        <CardItem style={styles.inforCard}>
          <Image source={icons.iconFpt} style={styles.icon} />
          <View style={styles.inforCard}>
            <Text tx="fpt" s2 color={palette.navy} />
            <Text tx="name" s2 color={palette.navy} />
          </View>
        </CardItem>
        <View style={styles.styleIndicator} />
        <CardItem style={styles.wrapperContent}>
          <View style={styles.inforDetail}>
            <Left>
              <Text tx="customerID" s2 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx="customerIDTest" s2 color={palette.navy} />
            </Right>
          </View>
          <View style={styles.inforDetail}>
            <Left>
              <Text tx="transactionID" s2 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx="transactionIDTest" s2 color={palette.navy} />
            </Right>
          </View>
          <View style={styles.inforDetail}>
            <Left>
              <Text tx="transactionFree" s2 color={palette.blueGrey} />
            </Left>
            <Right>
              <Text tx="free" s2 color={palette.navy} />
            </Right>
          </View>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  inforInternet: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing[3],
  },
  money: {
    // paddingBottom: spacing[2],
    color: palette.navy,
    paddingBottom: spacing[2],
    paddingTop: spacing[2],
  },
  icon: {
    width: 74,
    height: 55,
  },
  wrapperContent: {
    flexDirection: "column",
  },
  inforCard: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: spacing[1],
    paddingTop: spacing[3],
    paddingBottom: spacing[3],
  },
  inforDetail: {
    flexDirection: "row",
    paddingBottom: spacing[2],
  },
  styleIndicator: {
    backgroundColor: palette.blueGrey,
    width: 275,
    height: 1,
    marginLeft: spacing[5],
  },
})

export default InformationCard
