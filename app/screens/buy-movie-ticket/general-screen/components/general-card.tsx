import React, { useState } from "react"
import { View, Text } from "components"
import _ from "lodash"
import { MovieNormalCard } from "components/buy-movie-ticket/movie-normal-card"
import { spacing } from "theme"
import { navigateService } from "utils"
import { HotMovieData, MovieData, MovieModel } from "screens/buy-movie-ticket/MovieData"

interface Props {}

export const GeneralCard = ({  }: Props) => {
  const renderMovies = () => {
    return _.map(MovieData, (movie: MovieModel, idx) => {
      return (
        <MovieNormalCard
          onPress={id => navigateService.navigate("BuyMovieTicketDetailScreen", { id })}
          containerStyle={{ marginVertical: spacing[4] }}
          key={idx}
          {...movie}
        />
      )
    })
  }

  return (
    <View flex={1}>
      <Text tx={"movie_nowShowing"} t1 />
      {renderMovies()}
    </View>
  )
}
