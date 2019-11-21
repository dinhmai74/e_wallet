import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Card, CardItem, Item, Label, Input, Content } from "native-base"
import { spacing, palette } from "theme"
import { Text } from "components"

export class Amount extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <CardItem header>
          <Text tx="cashIn" t1 color={palette.navy} style={{ paddingLeft: spacing[1] }} />
        </CardItem>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Item style={{ width: 250, height: 45 }}>
            <Input placeholder="Amount" />
          </Item>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing[6],
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[8],
  },
})
export default Amount
