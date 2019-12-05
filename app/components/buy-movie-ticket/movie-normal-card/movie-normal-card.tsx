import * as React from "react"
import {
  ViewStyle,
  StyleSheet,
  TouchableOpacityComponent,
  TouchableOpacity,
  Image,
} from "react-native"
import { View, Divider, Icon, Text, SizedBox } from "components"
import { color, metrics, spacing } from "theme"
import moment, { Moment } from "moment"
import { translate } from "i18n"
import styled from "styled-components"
import { generalDateFormat } from "utils"

enum MovieDimensionType {
  "2D",
  "3D",
}

enum MovieDigitalType {
  Digital,
}

const StyledText = styled(Text)`
  margin-bottom: ${spacing[2]}px;
`

export interface MovieNormalCardProps {
  id: string
  title: string
  dimensionType: MovieDimensionType
  digitalType: MovieDimensionType
  duration: number
  source: any
  stars: number
  releaseDate: string | Date | Moment
  onPress?: (id: string) => void
}

const calcStars = point => {
  let divideResult = 10 / point
  let fullStars = Math.floor(5 - divideResult)
  let noneStars = Math.floor(divideResult)
  let halfStars = 5 - fullStars - noneStars
  return { fullStars, noneStars, halfStars }
}

export function MovieNormalCard(props: MovieNormalCardProps) {
  // grab the props
  const {
    title,
    onPress,
    id,
    source,
    stars,
    releaseDate,
    digitalType,
    dimensionType,
    duration,
  } = props
  const infoText = `${dimensionType} | ${MovieDimensionType[digitalType]} | ${duration} ${translate(
    "movie_minutes",
  )}`

  const starsRow = () => {
    let result = calcStars(stars)
    let renderStars = []
    for (let i = 0; i < result.fullStars; i++) {
      renderStars.push("iconFullStar")
    }
    for (let i = 0; i < result.halfStars; i++) {
      renderStars.push("iconHalfStar")
    }
    for (let i = 0; i < result.noneStars; i++) {
      renderStars.push("iconEmptyStar")
    }
    return (
      <View preset={"row"}>
        <Icon icon={"iconMovieCheck"} />
        <SizedBox h={1} w={2} />
        <Text color={color.chosen}>{stars}</Text>
        {renderStars.map((val, key) => (
          <React.Fragment key={key}>
            <SizedBox h={1} w={1}/>
            <Icon icon={val} size={metrics.icon.small} />
          </React.Fragment>
        ))}
      </View>
    )
  }

  // @ts-ignore
  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <View style={styles.container}>
        <Image style={styles.avt} source={source} />

        <View style={styles.content}>
          <StyledText text={title} t1 />
          <StyledText text={infoText} b2 color={color.textGrey} />
          {starsRow()}
          <SizedBox h={2} />
          <View preset={"row"} style={{ justifyContent: "space-between" }}>
            <StyledText tx={"movie_releaseDate"} b2 color={color.textGrey} />
            <StyledText
              text={moment(releaseDate).format(generalDateFormat)}
              b2
              color={color.textDescription}
            />
          </View>
        </View>

        <View style={styles.arrowWrapper}>
          <Icon icon={"iconArrowRight"} />
        </View>
      </View>
      <Divider width={"100%"} />
    </TouchableOpacity>
  )
}

MovieNormalCard.defaultProps = {
  onPress: () => {},
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[2],
    marginVertical: spacing[3],
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    margin: spacing[4],
  },
  avt: {
    ...metrics.images.movieAvt,
  },
  arrowWrapper: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
})
