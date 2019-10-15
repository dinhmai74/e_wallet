import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { icons, Button, Text } from "components"
import NewsCard from "components/news-card/news-card"
import { color, spacing } from "theme"
import { Card } from "native-base"

export class ItemNews extends Component {
  render() {
    return (
      <View>
        <Text tx="hotNews" style={styles.title} h5 preset="title" />
        <Card style={{ paddingBottom: spacing[2] }} transparent>
          <NewsCard
            title="beefRepices"
            subTitle="ahihi"
            imageUrl={icons.promotionImage}
            style={styles.styleCard}
          />
        </Card>
        <Card style={{ paddingBottom: spacing[2] }} transparent>
          <NewsCard
            title="beefRepices"
            subTitle="ahihi"
            imageUrl={icons.promotionImage}
            style={styles.styleCard}
          />
        </Card>
        <Card style={{ paddingBottom: spacing[2] }} transparent>
          <NewsCard
            title="beefRepices"
            subTitle="ahihi"
            imageUrl={icons.promotionImage}
            style={styles.styleCard}
          />
        </Card>

        <Button
          transparent
          style={{ justifyContent: "flex-end", flex: 1, paddingRight: spacing[2] }}
        >
          <Text tx="seeAll" color={color.textDescription} />
        </Button>
      </View>
    )
  }
}

export default ItemNews

const styles = StyleSheet.create({
  styleCard: {
    backgroundColor: "#f7f8f9",
    borderRadius: 5,
  },
  title: {
    paddingLeft: spacing[1],
    paddingTop: spacing[3],
    paddingBottom: spacing[2],
  },
})
