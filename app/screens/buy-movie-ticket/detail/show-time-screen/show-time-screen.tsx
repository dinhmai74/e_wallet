import React, { useState } from "react"
import { MovieTimePicker } from "components/buy-movie-ticket/movie-time-picker"
import { SizedBox, Text } from "components"
import { MoviePlaceRow } from "components/buy-movie-ticket/movie-place-row"
import moment, { Moment } from "moment"
import _ from "lodash"
import { navigateService } from "utils"
import { MovieModel, PlaceData } from "screens/buy-movie-ticket/MovieData"

interface Props {
  movie: MovieModel
}

export const BuyMovieTicketShowTimeScreen = ({ movie }: Props) => {
  const [selectedDate, setSelectedDate] = useState(moment())

  const result = []
  PlaceData.forEach(place => {
    let inSelected = place.date.filter(d => moment(d).isSame(moment(selectedDate), "day"))
    if (inSelected.length > 0) result.push(place)
  })

  const { id: movieId } = movie

  return (
    <>
      <MovieTimePicker
        onDateSelected={val => {
          setSelectedDate(val)
        }}
      />
      <Text tx="movie_place" />
      {result.map((p, idx) => {
        const { place, id, times } = p
        console.tlog("p", p)
        return (
          <React.Fragment key={idx}>
            <SizedBox h={4} />
            <MoviePlaceRow
              times={times}
              title={place}
              id={id}
              onPress={(id, timeId) => {
                navigateService.navigate("BuyMovieTicketDetailSelectAmountScreen", {
                  movieId,
                  placeId: id,
                  timeId,
                })
              }}
            />
          </React.Fragment>
        )
      })}
      <SizedBox h={4} />
    </>
  )
}
