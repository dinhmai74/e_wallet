import React, { useState } from "react"
import { View, Text } from "components"
import { HotMovieData, MovieModel } from "components/buy-movie-ticket/hot-firm-card"
import _ from "lodash"
import { MovieNormalCard } from "components/buy-movie-ticket/movie-normal-card"
import { spacing } from "theme"

interface Props {}

const MovieData: MovieModel[] = [
  ...HotMovieData,

  {
    id: "5202faa8-d326-4633-8fbf-61c741ed833f",
    title: "Extra ordinary",
    source: {
      uri:
        "https://m.media-amazon.com/images/M/MV5BOTZiMzZiNTktZGRkNi00Yzc4LWEyZTYtMTEzOGZjOTFkNWZkXkEyXkFqcGdeQXVyMTI4Mjg4MjA@._V1_.jpg",
    },
    digitalType: 0,
    dimensionType: 1,
    duration: 180,
    releaseDate: "2020-01-18",
    stars: 8,
  },
  {
    id:"97dab2ea-62dc-4817-8e2b-dfbefd02cb76",
    title: "Charlies angles",
    source: {
      uri:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-day-movies-charlies-angels-1567050231.jpg?crop=0.9891196834817012xw:1xh;center,top&resize=480:*"
    },
    digitalType: 0,
    dimensionType: 1,
    duration: 180,
    releaseDate: "2020-01-18",
    stars: 6,
  },
]

export const GeneralCard = ({  }: Props) => {
  const renderMovies = () => {
    return _.map(MovieData, (movie: MovieModel, idx) => {
      return (
        <MovieNormalCard containerStyle={{ marginVertical: spacing[4] }} key={idx} {...movie} />
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
