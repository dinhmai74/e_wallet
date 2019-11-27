import React, { Component } from "react"
import { View, Image, StyleSheet } from "react-native"
import { Card, CardItem, Left } from "native-base"
import { icons, Text, Button } from "components"
import { spacing, palette } from "theme"

export class InfoPaymentCard extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <CardItem style={{}}>
          <Image source={icons.iconFpt} style={styles.styledImage} />
        </CardItem>
        <CardItem style={styles.content}>
          <Text tx="fpt" />
          <Text tx="name" />
        </CardItem>
        <View style={{ justifyContent: "center" }}>
          <Button bordered onPress={() => {}} tx="pay" transparent style={styles.styledButton} />
        </View>
      </Card>
    )
  }
}

export default InfoPaymentCard

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[6],
    shadowColor: palette.shadowBlack,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  styledImage: {
    width: 65,
    height: 50,
  },
  content: {
    flexDirection: "column",
  },
  styledButton: {
    marginRight: spacing[4],
    textAlign: "center",
  },
})
