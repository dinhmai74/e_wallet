import * as React from "react"
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import Carousel, { Pagination, ParallaxImage } from "react-native-snap-carousel"
import { color, metrics, screen } from "theme"
import { icons, Text } from "components"
import { getElevation } from "utils"
import { Moment } from "moment"
import { MovieDigitalType, MovieDimensionType } from "components/buy-movie-ticket/movie-normal-card"

const itemWidth = metrics.images.sliderWidth
const itemHeight = metrics.images.sliderHeight

export interface HotFirmCardProps {
  onPress?: (id) => void
}

export interface MovieModel {
  id: string
  title: string
  dimensionType: MovieDimensionType
  digitalType: MovieDigitalType
  duration: number
  source: any
  stars: number
  releaseDate: string | Date | Moment
  director: string
  cast: string
}

export const HotMovieData: MovieModel[] = [
  {
    id: "49b48aa1-2261-4b30-9454-0da5ee37520f",
    title: "Mantera",
    source: icons.bgMantera,
    digitalType: 0,
    dimensionType: 0,
    duration: 120,
    releaseDate: "2020-01-20",
    stars: 7,
    director: "Ada Byrd",
    cast:
      "Marie Perkins, Lawrence Poole, Ola Jones, Rosa Harris, Cameron Pittman, Ronnie Blake, Lawrence Stewart, Ella Erickson, Donald Carr, Johnny Parsons",
  },
  {
    id: "75a7c68b-533a-41dc-9c15-ad1afd846d3b",
    title: "Moon light",
    source: {
      uri: "https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._SY679_.jpg",
    },
    digitalType: 0,
    dimensionType: 0,
    duration: 180,
    releaseDate: "2020-01-17",
    stars: 9,
    director: "Robert Goodman",
    cast:
      " Samuel Christensen, Essie Hunter, Andrew Vega, Hulda Phelps, Melvin Miles, Amelia Hansen, Rachel Barber, Maria McCormick, Flora Vega",
  },
  {
    id: "f2ea7616-5ecc-468c-9fda-0ecd689490ac",
    title: "Wow",
    source: {
      uri:
        "https://cdn.cnn.com/cnnnext/dam/assets/140327194124-himym-cast-horizontal-large-gallery.jpg",
    },
    digitalType: 0,
    dimensionType: 1,
    duration: 180,
    releaseDate: "2020-01-19",
    stars: 10,
    director: "Nathaniel Ingram",
    cast:
      "Hunter Moody, Justin McBride, Jerry Adams, Mabelle Williams, Ernest Klein, Ora James, Irene Spencer, Pauline Moran, Josephine Griffith, Betty Steele, Mark Wade",
  },
]

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
        layout={"tinder"}
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
