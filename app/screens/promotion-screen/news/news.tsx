import React, { Component } from "react"
import { View } from "react-native"
import ItemPromotion from "../item-promotion/item-promotion"
import { Card } from "native-base"
import NewsCard from "components/news-card/news-card"

export default class News extends Component {
  render() {
    return (
      <View>
        <ItemPromotion label="news" viewMore="viewMore" icon="iconFoward" onPress={() => {}} />
        <Card transparent>
          <NewsCard
            title="akinaMountain"
            subTitle="japan"
            number="numberTest"
            time="times"
            icon="checkIn"
            imageUrl={require("../../../components/icon/icons/beef.png")}
          />
          <NewsCard
            title="akinaMountain"
            subTitle="japan"
            number="numberTest"
            time="times"
            icon="checkIn"
            imageUrl={require("../../../components/icon/icons/beef.png")}
          />
          <NewsCard
            title="akinaMountain"
            subTitle="japan"
            number="numberTest"
            time="times"
            icon="checkIn"
            imageUrl={require("../../../components/icon/icons/beef.png")}
          />
        </Card>
      </View>
    )
  }
}
