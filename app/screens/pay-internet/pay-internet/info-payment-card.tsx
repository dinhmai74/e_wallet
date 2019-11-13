import React, { Component } from "react"
import { View, Image, StyleSheet } from "react-native"
import { Card, CardItem, Left } from "native-base"
import { icons, Text, Button } from "components"
import { spacing } from "theme"

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
        <Button bordered onPress={() => {}} tx="pay" transparent style={styles.styledButton} />
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
    marginLeft: spacing[3],
    marginRight: spacing[3],
    marginTop: spacing[5],
  },
  styledImage: {
    width: 74,
    height: 55,
    backgroundColor: "red",
  },
  content: {
    flexDirection: "column",
    marginRight: spacing[3],
  },
  styledButton: {
    width: 91,
    height: 32,
    marginRight: spacing[2],
  },
})
