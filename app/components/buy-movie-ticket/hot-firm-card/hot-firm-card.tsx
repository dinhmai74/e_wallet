import * as React from "react"
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import Carousel, { Pagination, ParallaxImage } from "react-native-snap-carousel"
import { color, metrics, screen } from "theme"
import { icons, Text } from "components"
import { getElevation } from "utils"
import { Moment } from "moment"
import { HotMovieData, MovieModel } from "screens/buy-movie-ticket/MovieData"

const itemWidth = metrics.images.sliderWidth
const itemHeight = metrics.images.sliderHeight

export interface HotFirmCardProps {
  onPress?: (id) => void
}

export function HotFirmCard(props: HotFirmCardProps) {
  const { onPress } = props

  const [activeSlide, setActiveSlide] = React.useState(0)

  const renderItem = ({ item, index }: { item: MovieModel; index: number }, parallaxProps) => {
    const { title, id, source } = item
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          onPress(id)
        }}
        style={styles.itemContainer}
      >
        <ParallaxImage
          source={source}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={styles.overlay} />
        <Text text={title} style={styles.text} h1 numberOfLines={2} />
        {pagination()}
      </TouchableOpacity>
    )
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={HotMovieData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        // layout={"tinder"}
        sliderWidth={metrics.screen.width}
        sliderHeight={itemHeight}
        containerCustomStyle={styles.slider}
        itemWidth={itemWidth}
        enableMomentum={true}
        itemHeight={itemHeight}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.6}
        hasParallaxImages={true}
        renderItem={renderItem}
        autoplay={true}
        loop
        data={HotMovieData}
        onSnapToItem={index => setActiveSlide(index)}
      />
    </View>
  )
}

HotFirmCard.defaultProps = {
  onPress: () => {},
}

const borderRadius = 15
const backgroundColor = "white"

function wp(percentage) {
  const value = (percentage * screen.width) / 100
  return Math.round(value)
}

const itemHorizontalMargin = wp(2)

const styles = StyleSheet.create({
  slider: {
    backgroundColor,
  },
  itemContainer: {
    width: itemWidth,
    height: itemHeight,
    backgroundColor,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: borderRadius,
    backgroundColor: "white",
    ...getElevation(),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    borderRadius: borderRadius,
    backgroundColor,
  },
  text: {
    color: color.textWhite,
    position: "absolute",
    left: 10,
    bottom: 20,
    right: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  pagination: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -20,
  },
  itemContent: {
    flex: 1,
    borderRadius,
    backgroundColor,
  },
  container: {},
  shadow: {
    position: "absolute",
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 15,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    ...getElevation(),
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "white",
  },
})
