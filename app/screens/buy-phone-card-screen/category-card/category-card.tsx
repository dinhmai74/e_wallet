import React, { Component } from "react"
import { Text, View, Image, StyleSheet, ScrollView } from "react-native"
import Indicator from "screens/pay-internet/confirm-transaction/indicator"
import { Card } from "native-base"
import { icons, Button } from "components"
import { spacing } from "theme"

export class CategoryCard extends Component {
  state = {
    selected: -1,
  }

  handlePress = val => {
    this.setState({
      selected: val,
    })
  }

  render() {
    const { selected } = this.state
    return (
      <View style={{ paddingHorizontal: spacing[3] }}>
        <View style={{ paddingTop: spacing[2] }}>
          <Indicator title="chooseProvider" style={{ width: 60 }} />
        </View>
        <ScrollView horizontal style={{ marginTop: spacing[4] }}>
          <Card style={styles.styleCard}>
            <Button transparent bordered={!selected} onPress={this.handlePress.bind(this)}>
              <Image source={icons.iconViettel} style={styles.styledImage} />
            </Button>
          </Card>
          <Card style={styles.styleCard}>
            <Button transparent bordered={!selected} onPress={this.handlePress.bind(this)}>
              <Image
                source={icons.iconMobiPhone}
                style={{ width: 150, height: 50, marginHorizontal: spacing[2] }}
              />
            </Button>
          </Card>
          <Card style={styles.styleCard}>
            <Button transparent bordered={!selected} onPress={this.handlePress.bind(this)}>
              <Image
                source={icons.iconVinaphone}
                style={{ width: 150, height: 50, marginHorizontal: spacing[2] }}
              />
            </Button>
          </Card>
          <Card style={styles.styleCard}>
            <Button transparent bordered={!selected} onPress={this.handlePress.bind(this)}>
              <Image
                source={icons.iconVietnammobile}
                style={{ width: 150, height: 60, marginHorizontal: spacing[2] }}
              />
            </Button>
          </Card>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  styledImage: {
    width: 150,
    height: 90,
    marginHorizontal: spacing[2],
    marginVertical: spacing[2],
  },
  styleCard: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: spacing[1],
  },
})
export default CategoryCard
