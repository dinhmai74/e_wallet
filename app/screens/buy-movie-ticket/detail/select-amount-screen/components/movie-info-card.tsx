import React, { useState } from "react"
import { Card, CardItem } from "native-base"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { color, metrics, spacing } from "theme"
import { Icon, SizedBox, Text, View } from "components"
import moment from "moment"
import { generalDateFormat } from "utils"
import { translate } from "i18n"
import { MovieDigitalType, MovieDimensionType } from "components/buy-movie-ticket/movie-normal-card"
import { InfoRow } from "screens/buy-movie-ticket/detail/select-amount-screen/components/info-row"
import { MovieModel, PlaceModel } from "screens/buy-movie-ticket/MovieData"

interface Props {
  movie: MovieModel
  place: PlaceModel
  timeId: string
}

const StyledText = styled(Text)`
  margin-bottom: ${spacing[2]}px;
`

export const MovieInfoCard = ({ movie, place, timeId }: Props) => {
  const { source, title, dimensionType, digitalType, duration, releaseDate } = movie
  const { place: placeName } = place
  const infoText = `${MovieDimensionType[dimensionType]}  |  ${
    MovieDigitalType[digitalType]
  }  |  ${duration} ${translate("movie_minutes")}`

  const iconColor = color.description

  let room = "Room 1"
  let timeTx = `${moment(releaseDate).format(generalDateFormat)}`
  let filterRoomResult = place.times.filter(val => val.id === timeId)
  if (filterRoomResult.length > 0) {
    room = filterRoomResult[0].roomName
    timeTx += " - "
    timeTx += moment(filterRoomResult[0].time).format("HH : MM")
  }
  return (
    <Card>
      <CardItem>
        <Image style={styles.avt} source={source} />

        <View style={styles.content}>
          <StyledText text={title} t1 />
          <StyledText text={infoText} b2 color={color.textGrey} />
          <SizedBox h={2} />

          <InfoRow title={placeName} icon={"iconCompass"} />
          <SizedBox h={2} />
          <InfoRow title={room} icon={"iconTicket"} />
          <SizedBox h={2} />
          <InfoRow title={timeTx} icon={"iconTime"} />
        </View>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
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
  iconRow: {
    alignItems: "center",
  },
})
