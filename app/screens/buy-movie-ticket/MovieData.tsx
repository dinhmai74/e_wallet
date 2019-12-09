import { MovieDigitalType, MovieDimensionType } from "components/buy-movie-ticket/movie-normal-card"
import moment, { Moment } from "moment"
import { icons } from "components"

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

export interface MovieTimeModel {
  id: string
  roomName: string
  time: string | Moment | Date
}

export interface PlaceModel {
  id: string
  date: Moment[]
  place: string
  times: MovieTimeModel[]
}

export const PlaceData: PlaceModel[] = [
  {
    id: "53fb120b-14a9-49eb-b966-c7e5b1cb32a2",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Nguyen Du",
    times: [
      {
        id: "564bb5e1-c08d-4a53-9381-ac68f813470b",
        roomName: "Room 1",
        time: moment().add(5, "hours"),
      },
      {
        id: "4a121739-66ef-4e23-9a73-490ea7143024",
        roomName: "Room 2",
        time: moment().add(9, "hours"),
      },
    ],
  },
  {
    id: "e99ab361-5a81-4902-b2f2-88c662979606",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Raymond Evans",
    times: [
      {
        id: "f9e8d91d-3302-4180-a5c6-a6aa14e389b5",
        roomName: "Room 1",
        time: moment().add(8, "hours"),
      },
      {
        id: "93636526-e5cd-48d5-b15c-a80de782e933",
        roomName: "Room 3",
        time: moment().add(5, "hours"),
      },
    ],
  },
  {
    id: "9d04cbd0-620f-4888-83aa-c60cb8b7ddd6",
    date: [moment(), moment().add(1, "days"), moment().add(2, "days")],
    place: "Samuel Bass",
    times: [
      {
        id: "9d881f63-d912-4112-b671-68e2d2d76c38",
        roomName: "Room 1",
        time: moment().add(5, "hours"),
      },
    ],
  },
  {
    id: "ef186a84-b58b-41ec-90fa-5f52592dbd7b",
    date: [moment().add(1, "days"), moment().add(2, "days")],
    place: "Theresa Harrison",
    times: [
      {
        id: "841a6d6b-b22e-4041-82bb-ff5080a4aaa8",
        roomName: "Room 1",
        time: moment().add(5, "hours"),
      },
    ],
  },
  {
    id: "06acb3d1-13bf-4f23-a7f0-4c95f9ae3364",
    date: [moment(), moment().add(3, "days")],
    place: "Amelia Perry ",
    times: [
      {
        id: "dd9c5602-7b35-457a-846a-3a194816e197",
        roomName: "Room 1",
        time: moment().add(5, "hours"),
      },
    ],
  },
  {
    id: "02fc037d-4907-43aa-8349-0d9486374f8e",
    date: [moment().add(4, "days"), moment().add(3, "days")],
    place: "Gabriel Gray",
    times: [
      {
        id: "58edeb03-b45e-4c70-9302-265e49e6c5ad",
        roomName: "Room 1",
        time: moment().add(5, "hours"),
      },
    ],
  },
]

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

export const MovieData: MovieModel[] = [
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
    director: "Lettie Wise",
    cast:
      "Lenora Boyd, Cynthia Flowers, Harold Reeves, Antonio Warner, Isabelle Wallace,Harriett Sanchez , Connor Wolfe, Winifred Lyons, Ann Wallace",
  },
  {
    id: "97dab2ea-62dc-4817-8e2b-dfbefd02cb76",
    title: "Charlies angles",
    source: {
      uri:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-day-movies-charlies-angels-1567050231.jpg?crop=0.9891196834817012xw:1xh;center,top&resize=480:*",
    },
    digitalType: 0,
    dimensionType: 1,
    duration: 180,
    releaseDate: "2020-01-18",
    stars: 6,
    director: "Jeff Taylor",
    cast:
      "Josie Lewis, Sally Maxwell, Aiden Ballard, Bertie Torres, Louise Lane,Bill Hunter , Callie Peters",
  },
]
