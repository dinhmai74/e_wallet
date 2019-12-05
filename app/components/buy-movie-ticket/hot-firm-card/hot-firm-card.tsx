import * as React from "react"
import {
  View,
  ViewStyle,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native"
import Carousel, { Pagination, ParallaxImage } from "react-native-snap-carousel"
import { color, metrics, screen } from "theme"
import { Card } from "native-base"
import { icons, Text, Icon } from "components"
import { getElevation } from "utils"

const itemWidth = metrics.images.sliderWidth
const itemHeight = metrics.images.sliderHeight

export interface HotFirmCardProps {
  onPress?: (id) => void
}

interface MovieModel {
  id: string
  name: string
  uri: any
  subtitle: string
}
const data: MovieModel[] = [
  {
    id: "49b48aa1-2261-4b30-9454-0da5ee37520f",
    name: "Mantera",
    uri: icons.bgMantera,
    subtitle: "freedom",
  },
  {
    id: "75a7c68b-533a-41dc-9c15-ad1afd846d3b",
    name: "The great Gondar",
    uri: {
      uri:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFRUWFxYYFRYVGBUXFxcVFRUWFhcXFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD8QAAEDAgQEAwUGAwcFAQAAAAEAAhEDIQQSMUEFUWFxIoGhBhMykbEUQlLB0fAjcuEHFTNiotLxQ1SCkrI0/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EADURAAICAQMDAgQEBQQDAQAAAAABAhEDEiExBEFRImETMnGBFJGh8AUjUrHBM0JTYjTR4RX/2gAMAwEAAhEDEQA/APF1YQG5AIyxg7URR4RBYxphK4JjKbQM0ipuDHU0QIS0OJYwkAjwsYdYwljDwsERCwBALGFCxhImEsAnhqD3uDKbXPcfha0FzjvZouU6ewj5O39kf7Na2JY6piC/Dt0YCwmo488joho9VCeVRdchsp+1P9nuKwgNRpFei0EuewQWAamoyTA6gkdkYzUjKRx6cYSxhLGEsYSxhLGHWMOEAiWMJYwoWMMiuQS4IlOSHDUoSQajRhymexkPlO5SOTHUUPl6JQjLoIEHIMZDLGDt0TCMkiAULGEsYHVFlOfBSHIJRLDwsEkAsYULGHhYw2VYwsqxh8qxhELAEAsYQbNljHXezXEn4JrjTID3EZ3ACQy3hkiY1OoXNmU5NKL2BS7nWUv7RNyWPbIGU5w6OhG/eVCMMq2aFcUG457S0K+HqsotlwY7OC4AQWkEa3kE2VFHdbUKk7PI8XQym2h0XYnZQBCJhQsYULGEgESxhLGHWMJYwljCWCMUVyLLgiEzYqRIBDUHSEDUtjCi6pLgnHkmP3CmOIt/ZWMQXSQBvQYUMsEsM0TIRkkRRLGHWMDq6KWTgrj5L3C+FtcQari1p2Akn56KF7lmzUZwXDyZeQ0GAZE90zjQqnZTx/BQJdRcXtGx1/qkvcdGTlRCIBYwWjh8yZKxZSom/DwQIKOkTWNWwpbfZBxoZSsBCUYeETFvAUJcDsFgNmpxigRDdoB7uIuXH0HJMoUT1WU6NIxYHUX6jT6I0Cy/Ua+HQ09Y0vGvzQcWFMDxDC5qYJBbBEdZEwetkHGtxkzBeyEBiMLGFCxhLGEsYSwRQgYcBYw8LBGhY1ESEY8iy4GAuswRLDaBkCNbpNaorodod7VosWSBHVXnwRgT+amOSydFSOO1YjnQJVJA3oMZDLBLFPROibJIijwsYULGGkC5Ucr7Fca7lh2NEQfRRRUhTxTBzRaQFZfwnFw2wHmlaQybKuOhxzi3MdUo6KVQ2lFGeyIMxRCoRe4UcQcm1A0iZjtQbgoWGhm3U3sVW4SmySFjG1gGta2QM0nK0X2+I/OEypKxHuyxSpvcfhPQRMXPzsjqBoLAwdb7rbbdDb8wjrMsZk1H4kS0l0Xt3Q1M2knTe408r51tzmN1rvY1UZuLYLECJ1jSRYpEOUyETDLGEsY0qHAcS8SKZANxmLW6iRYmUupHPLq8KenVv92VKmDqNMOY4EayIWtHQmmrQItRGGhYxZ4fgKleo2lSaXPcYAH1PIdVkr2Rm0lbOy4r7CUMLTacRiiajr5KbBbzKd42iUcyfYwn8GouEU3vzbZgIPyFkVFAc2wHsrwgYnG0sM85Q9+Vx0iJn6LnzzcY2uS2NJ8nr3Hf7OcJhQ91Iu+C0uLonW7l5fVSyQkk5Weh0rjJcHjvEqQa4gc16OGTaOTMqbM94hy7JcHJHkeO6mOaWHb4QrR4IS5MpUFIVEGMiCASzT0Tom+SaYA6xhLGK2KdoFz5OS0OCFFkmTpuplDWwmCovl3iAaJI1tpPRAZIoVcOJOQm3OJRBRLB1JMHeEskGJr43DzTdDdEUgy4MDB0c7w21+aYmjpMDwqA9pMnLItpB1CFlFEyuL8MNJskg387rWLKNFfCaJMg0A9gtHg0ixw3F3aDtM/NPLgSPJ1eA4k0WMKVHQmjQHF2SmoGwGrjKcEwszbHO8TriJG10ELLgwjUkG2/ylOTQItQCNCITc9msE1zi9+jb6T6KWR9kGKOv4afegw1xvaBbzUlFthhDHD5Uka7OHnL4qJjuHST02FgnWNoLmcL7Y4Gm0gsblcDD43kSCmi+wGcsnMdL7BcSZQrvqPdAFJxne0GPNUxOmyGdNpFfFe0FXFVXPc4NaTO0xtc9FpSbNGNFLGYiLsqOB/mJS2x2kB4XxOpSrsrtPja7NfQkWM91PLBTi0x4PSehcR9uamJpOzAMkRlBJXlS6eXxFbs9TFKEcba5PPcS+SV6uNHmZGVfvLpmc8CcdlIqWmYqAAqKdIk4Nspq5EHUQY8SCASxT0Tom+SaIB1jAcQ4iIU8jaHgkyOIbIB+aSa2TGg96L3B6dNxyvPYqLLxS7nVYSvhaLnMfYOpkaEzynohyUpLYFjMDQa0uG7TA2EjUboNt7GaSOPpNAdIM3stJ7CxW5p/wB4O5apdbH0mTlLXg7EqsJWQmqZsU673EEbd79DdZqh4u+RcQJquAIncjtb80N6tCuSbpk2cKdsBCDxSe42uK2KeJZlBBO4mOU3/NCIGAhoeckhtozRI5gxrdMBqnsbOGrUhq+/mPVCh7RpjFUzBhENjYrE0SIkNPVZo1oycZEeEyIPNLRmZrKQbaSXES7oenOyYSqIPCxiOVYJu8LqQwtBgnKPK6lVsN0jt+FY0UqTQyBzJ3PVVjtsarC4ji5MnMAizJHHe0mJz3+8ReN40Km1uE5N1kwBnbrLYDVoVCmDYoipBsZ7uGhoILQQ62t0Nw7AGosyLja3hj81Fx3L6vSBJlViRkDaLlWmSxhR5fJSHJA9fRYwJdhyg6iVjRIBAJYp6Ki4JvkmiASxgOJ2UchSBJ2iE/kGh8xHC+E/RQsulRrBtWoWuF40OUHTa5QGW4bieLeGEPMu00AiR0toslbBJ0itwThRrOy5g1o1cfoBzVcWB5X7HN1XVx6aCdW3wjq6Xs/hmAOj3vc2+QXfDo8Ue1nhZf4r1GR0np+hkcbwbC7wtABAgAREckcmKPCRTpuonzJ2zHy5DcLhljcXR7WPLGcbN/gWFLgS5tiuzBhWl33PH67rHrWl8GrUwAIhjodyOhHQoT6f+kbD/E2/9RfdHDcVBBcHWgkR1XnaXF0z2ozUo2uCtgb2PaeqIyLDcL+ITdFMziaHCaDiXx8LRPZAaMWwVfCZzcHvPppoiqA42HFANHf92SsZIysNUzPc48z8uSzEu2Gqi6ASFFskAblZukGjewtPwtIaCM3iI1EczySK2U0rSauI4J72C2rYxLbeHtKqq7itMbFcDHu2Ma8zLvEd407brAoxcXhzRsXBxgjnE2SS34GSrkw8SbrIUfD4V9Qwxpd2RSsz2VsBXY5pIIgjXoU1VsJd7ohnmFkgN7DhZ8hXAVpSUPZIJlyI+CDNSqTEhwEzd1Mcdru6xqBrtOQhUSsaJAIDFhmidcE3ySRAILGHZhX1XBlNjnu/C0En00Usg8DQxXBqlAAV2kOgHKIMfzEb9FzZM22lHp9L0alH4suPBR+zQeYO6WLtC58coy3+xZo0yBqU1EQ/uw6AQSJ8X5X2KnJuO6OzpcSyycZLY3eH+y9Y0veYcioJu2YeNIsbOXV02eKW55n8V6GUMiXKrYNw7MCWPBaGyXBwII7gr04StHzHUQp+5n8TxGcyNNuyWbsvghpVMpto5r8ojokq92X16dlwb2AxLi0ZgBHLfqrRba3POywim6B8XeQAQY/qFPM6Vov0UVKVM43iziTJXlylqdn0mOGmNGfQeQ5YZG3hDISlEzY4BxbD02VGvbmc6TpoNAOv9USsJJIC11reXZYBmcZrkNsSCTssJNmXg/iCDJovVighwdF0EFaS2MuQ326oxxLHQDZw5gRYhLHYZtnScLxoBnUciqATIe+ipnDC0XtmeRfWJasFpeTG4rUJMn5JWBs3PZbgeFrMz1HFzh8THHK0cr7hUUPTaJPJUqZo8Z9oMNQZ7vDta9+gyiKbe51cUtU7ZaMHJeEcXi8RTrXd4Km5+65O2pc8knBwe3BT+yhplzhHRDTXIt3wWaH2d7YcXUn/AIgMzD3GoS7MrpfYFXwxbF2kHRzbg/og0AGEY8gfANupT5ORIcBB+7qY4481jDLtOQHUSyGiQCAwduifsTfJIaIgOi9l+CNrA1at2N+6XZG93vOjeguVLJNraJ0YMKm7k6Xtu39Eddh8dTYPd0cVQpD8FCg53+r73dcUpW95/oetj6SCW2Fv6ySMbjTmvec1StVNrChkNhzJsPJLWPy2dEZZccdKUYx93ZkYTA12OcWUyWuEPpuc3Nk6W9QE8Z12PP6hwkvnsljOHPZBAJadDEGfwkbFVkqOWMlIu8Pwz3NFP3D3UQ7M/JUDTVeNCTEwNgEksiqqs6cMYar+Jpf0Ok4UG0s2UY6npIApEQOsXUvR2TR6EpSmkpzxy8Xa/sLiONw1Zhp1auIbNg+tSbY/zMgx3kKmPNo4k/ucufoMeffRBtf0yd/qcbiqWR7mFwdlMS0yD1B5L1Iy1JM+Uy43jm4+A3CxJdytznyVIcnPn+Wwrau06dk9knEDi8a4tDTBB+YI3Uc0ridPS4kslnN8RbBvBleWj6DsZpN7JxTVwla0oMZMJSrO1yt+a1FYxL9CuSLiEAPZmHxLEZ320Gn5ok5O2Pg2oMyLNVZBOr9m/Yk1mCtWeWsM+AAh87TOg3V4Yb3Yjn4LtP2JwxqZX4ggTZsAOdABjMbbjQJcmHS7QymuDB4rhDTrOySBNh0GiQJGvxCq5sPeSFg2bfA8JhKrfd1A5zb+JxPgzDMYdtBBXRjxpx3ElLfYlT9kntz1MPmq0HU3AZiA8nYhoHiby3WWPSycnx9TgqgLTlc0tcNWuBBHcFc1Ud6mmtgFRYnLcEsTCtKxRMM2p4I5mfkIR7E5O2IFaPIkuCFPUoz5BDgnPZIOS8ljCXccRCoEshogglHDN0TdhO5MaJhTYwGFzZCxwqAXfRJh3h1I56lceSCm7i79j08eR4YbqnXJ1FHEUacAlrGkS11gufgilkyvuyNT2ja0xm96OgMoaky66DNVtUIcQNX4MLWJGhiI80VGT4Q34SC+bIkalWhiauGDDQdnzGQC3OaYAI3ESSRzEK7+J8OqJLDg+JSybVzT5BUuIvpANdhKzQBFmyLdlCpLlMt+ChL5csWSf7Rsj+I2oxo2LCPmhq8oP/52Ts0/uZuL4/SdmIe2IgB3W2m6aNMg+ny45cfkc7WykgsDg2BBdqYtm6TC9HA04bHl/wAQv47cnu9wmDLg4OHwgiV0RdM8/JDVBhOIAsqSNDdGVpk8NThRQrkuc1rQSTNhc/IKct2kjph6U5PsH4nRZSpHOBnMQ2xdbmNlsuOMYNNblem+JKSyX6dzlHOlcB6dljCuhAKNXDVGHaT2WHTLNRsg7W0QMc29kEjknRJljC1QPnPfp0TxUXyK9V7HWexOKptrsc6gKz3nLTaTo7ctmxItr5KsMceRJ5Gr9jvcbxdwqFrx3YYzAfibHxDr9F0KPgKmqTe1mVj6FOo0g+On8QMw+m5oMOHqPNCSH43KVZjKlMtefEB4ahse1TbzUMuKt0UjbdHL43COa4Aix0M69kkMfdme2x0fBsOxjM0GoRlcGwcua4E/i1XQlTJN7m3Sx+JeMznZGDXbTYJ6QTnfaei3FPFWJcxrQf8AMM256T9VPJii433JvNKE9K8FLD8IoHMcg6Kaxx8AeafkzHcKpA3afmUnw4jfFkVMRgqYaTBEdUrih1klZk1Hyfop8jDCOcIgCUj5pWMgqAxMeSxhLvOIhUSyGiDCQYK3RN2FfIWkJIHUI9he5tVcC0+7I8JM3FjMLz3yduPNKO3JXw2Np0gJpmrVDiIqXphm1tSUy0rerf6HRHNJxq6S8cnU4fE4wjwGhRB0yNbP5pfiT7bDOfTLnVL6sVXCV3f4mKqH+Xw/RK5TfLB+KxR+TEiNbCNaxjQ6p4XOcXZvF4g0a/8Ais94pCrrZqblS4rgs0KFUWZi6w5AmfqVk5Lhso+sxy+fFH+xJ4xpsMXI5PDY85RU8nkX43TPnHX0Zy/E6pL4qMpZgf8AEZADtrxYpnK+ULOaqsbdeGPiqwcGhhmBBI7z+a6+ll6WjyOuxOElKXcq5YIK6ao47TRs08Caxbc5R8R5dB1XQsbm0cayxxJt89ifHOIDCsayiwNL7ZjoI/EdSb7qmaawpKK57m6TA+qk3key7HGYg1HuBu4gu8UyDB1A2Fx815mSUpSu7fk96MYxhxS8eCoweKDz/ooV2LJ9zQ+xwplKNRmGAAIRoxEGxKxjnw/xZpvMjebp4kpBmUHGXFuUa3ENkmwBO1/RVUW96E1pbXYWvUc1wGa9M+EiRERpyuFTJKV6W7oXGo1qSq9zRxnEnOearsQXuaG5TuSQdPw5TujJpcMru16jrOB41temDUGVwE5gYD8pvbYzEjrZVjbSbFU1KTj3VX9yxVDSTGiYcB7hkyWgnmtRi/RxYESDAHOP2NUrjuLRV4jji8Ro0XRCcviOOuzilTEjN4j31XHPJ6gT0pe5sYMQwk7qyOdlDFG5SMZGPxM+A+X1U58FIcmQ2N1EsxZG80QFwBrGER4n89m/qUXshVbdkKInUwOaCVjtieZ0iOqGxtx13HIQelkMgYSjBG6I9hXyGo5ZGaY3jXyQm0o7jYk3NUajgwUw5mJBLSCGPa4eq5HGPaR6LTcd8f3TM3iJcHmSwmZOUyLiVtNEXGN7XRc4bWfqGZjsc2nqhpk+A6MfeRvUa+LcLNpt/mc3/ch8GZSMemXLb/f0JPoYo/8AUods7VvhS8r8xn+G/pl+THH21pH8Njo/C5v+5b4U/Arj039TX7+hl8ax2IykVGhnPxD6AraGuRHDF/tdmPw+oCQXMNSPukkN9Edl2Dj270alSo8sBytY0Os1g0nWTvoujp5u2ji6/Q0ndvyyuaru66bZ5qijoOC4916OUB5kiekS0gb5bjsV34ZNKnycfUdMpNSjutv1/wDpkY+oPFRrkktGdriAHXvEc9bFQnOLjLHkfG6Z6GPBLHOOSCq6Ul4/f9zJoOIfLCLxt4RI6aR+q4Vzsem2laB4trgIHjY15h4ES46m94WcZabrbyRWnVV7/wCA/C8To0nTTtyUZJclovsa7jKUoZPFcRA923f4u3JFIVmZRDgQQNLqkIy5S4Iyaaps3KWJa5rWuY4gAkOA0d+YXoqUZRXpdeaOCWKcZNqSvx7GQ+pPOdDO0WXA5ajvSoewGkl2kjS4uO9+0LcIZM6HhGMoMoZiSarbNYHZbuMknYgQutZIPHFLlHJGOSOaUn8rX5/5Ogw2La9sttBIIOoI1BROqElKKaCh6ww5WMY3HcWG0yBvaVDPNxhsGMdToxaFRrBLRB/E78gvI+HPI9/0OuHS44erIzXLntAMktIBAPIibL1d0eW6b2AYmrAzeSDYUjF4hXBbG86KMnsVitzMcEg7HpC4WQGWar2klxk8+vJHbk24L3xP5AINhQVhnl5pRia7zjIvSyCgSQcI3RN2FfJd4b8V1PK/SGCd7Gw2hTIILW3GsDVcZ0rJPizHp0mB2gsLtO4kgx10Tdg3KRfPA2vGeiZB+6TDh06oX5AskkSo8KYLOBnuhRRdTNcFr+66UaH5lCkN+My+SLuFU5tmHmtQfxmT2LGM4FSbRqVjJysJE/i29UyJyzTnszmsBiMoNjOgtvyRaAoXuXsY7EU6OfIWCW3JEnXbzVMeuDsXNhxThTdmfS4pVcYOWDM2A25roWab2OL8LjjurHrYw+F4zBwMlws4zbXt9VWeS0n+v79h8cNMtuPHgnjzmDXTmzNu64nLa4O/ZJPfcs+zLOFdVLG5XQIsBO23n+a9DFDJLCt9q8HFNwWTjcz6rXNBYZD2uvbTu6VwSclHT3TOlc+xXpuIu0CW3J/Xop1qjSXHLHundm0cYBTz9Ld+SgVsxftBMyJmVVPaqFbICqdrdo06rRm1wK4pmjhGEtBk/wDC9Pp8TeJepnLkklLgrUqYzF0nLaSeZ/ZXDCEb9i0pOq7hMWzQAaA+KIn5eSpmjVKvv5Ewu7d/bwIVrAASG3FtSYnOQdP6JNe1JbL2/uHRvbe79/Hj3LnBceWPLZs4CO4H6fQLQnuViqOlY8gZneSuMM3EFazGLxnxlrTz2XNmYYkqXD6TX085huYZi4zAUlJ2kGcfS2bmL4rhmN93Veyq0fC5h8Y8lZyRyKL7HPv4lQk5S7Idni/eyS0PpZlcSNMuBY7NP7upTrsVhYCpA1E2SoZgmG/hlEBaqgs8JE2uOSlu3sU2orVLmyf6i/QsYMGTHqsjMkV3HIQelkMgSQcKzRN2EfJbwQZfOxzhzaYIKllcdkzp6ZStuLS+pYeKMeEVz0MRO0lQ9Hudb199IDC3Dj7sOYxwzNnxXBFnLNpVsSjNW99yyw0QRlqVKQOocMwHIiEPQ+9FdM+XFSLDWGfDi6Z/mBH1C2hdpIXTHvjYf3b/APuqHbMP9q2j/shqx/8AG/39xnNfviqI7GfyW0f9kbTDtjf7+4bEvb7ssNV2IOVzixoc1jYFi47paind2VaqDWlQ93u2c9gGlxyjO4a5W7nqdk0m0cSlW9GpUwlM06rXnJUySxrjmkgzAjQ2Sw5GyZpzVdjn8LSzTeCAIB3JOnyldUY2cspUIOtBTXtuGi+ziLnURTLRAAE8oNj32VllcsemuBr2ovYN2VjSbZQDa+l16eJ106+h5+WL+K0HxnEaElwN3HMS0E3Gk9YUpZsEeO5CGDqHz28mJiDTNR7w4ibtAbuTcOBtC82WnVaZ6EVPQk0BqkFnhgAat2B5iecLTjBx1R+//saMpJ6X9gBbA11G30KStK55Gu2JiVbDG1w8S0E7kz8yvb6T1Yk37/3ODNtKkWuFcJdll7QQTMfSfl6qfT9NUfWiHU9WtVQe5S4qyXOy2DWiAOcm0dh9FDqknKo9l+p0dLNqK1d2Z+GMh2Z7mttIAmTsCPNcuNWpXKkdWTlNK2NSfBDhMgyO4iPokVVf79h9zsC51QybAbLq5GJuYRfZFmMSq7M+dgQFyz33GiXeJszU/JRXzIpL5Wc86h2XS4HJqIVKUaoONIKlYOLeahNFEyb4m/JIhmSw7hPJLNutjRW+4q7ib8z6LJUgt2wbQsYNRcW6GPVG6BViXacpB5QYUiCVRHJtITaQGrwqvRAIqE87Ej6Llzv1UVx4pS4QV1UvltFlWDqTcCOuwU4K2VlhlD5tgXCqoZLnQWPljwLuGhDo5SrdQqqieGDn+9i5hKrXSyWkjQH7w81zXe5SeOeN0xzhWfhCIFlmu5M4KnHwj1QG+Pk8k6ODpCXOaMrRJnosb42R9yVLEUwxwAzPrSMrB8LCI+ZsgvYp8DLN3L82c7gabwcoYZaSHQSDIsQY0VZryDFNVTo2qeEa5pDMIc5HxF5N4kpdUfH6llJRT9a/I5vBvAFz97y0Ik9pHqurG138nmTTa2LnEaTfdte0fETcA8pMrp6nQ4qUVyRwOepxl2KOHqFstmx9VzRbjcezOn3NVh/hEf5T+a9aP/jfZnFJfzvuUKtOI7A/MSvKaO0GQLb89t9AeyGwN9zRocLeW/aAGincAF0ujTl59pVMVa77EMk6Wl8mbXe1xBaMtrjqOSXJKEncVRXGpJVJ2FwWXMM4ls3A10RxadS1K0DLq0vS6Zr4fLByiGyY1Nptqva6bTo9PFs4Z6ttXIXF8XeP4bG5Whuo1daCZUMmd24pdiOPpIN65O3f5GBhaxJiWgQXHMYDj+vReXCb/fc9PJBf4+hKjTc4OIPhGutzNhG51RSlKLd7BlKMWl3LVINaGkj8JI85XRSWJbEotuZ1uBpiq0PYbb9DuEU0+DpQLitcUxkHicdu6E5VsEzsRh/dsa3eR5uNyewEBQyKojLkutwx92ZXPxuUq9jm61V3TvC7ZSZwqKKpMqSd8lOATx6qWRDIevoOykh2yFMgSfL5oPfYMdtx6hkyPhCLFQmlKOaHDWMuXzEWjmllJLkOlvgo1nwu5yo5ooHnWUhqHzprNQ4ejqBRtYAVXMDW5I1EgZvUaLjzTepnTiljit7LeIp1hTINR2UAktbZtuZslxyk5JNjZcuJr0x38sysLUBa4FshozZgYcNo6yr9RDVJNckcWWUFXbwXKvE21Rleym933asZH6WzRqueV90dOOcGknJqvuiZZRDRn98x8atyuYeoOqVaPcrqnO60sR9zH/6n+bHfqjph5/QFS/41+aHD6TS0jPWaLvDyWNJ2Ai5Q9Ke24dW1Saj9N2HrcYbSzZXtaXXyUGiByaXlFRyP5dkBdRhW8ouT93/gw+H4t2cnLmLiTpJkppR2o5L1yb4s6fBVq+U5aNQEjwuDdbaeI8twp6JeCvwY/wBaOQoPLWyPiMjyNjbe0hdkHUbXJxyVumKrmAAfIgeEdNPLv0WlqXzBjJP5QD3XBCm3uObNJ4cIFweka6iB1K9bFLVgr2ZzZEllvtsZ7n6aeUfkvNbOggY/e5/f0SsxLDE5oBI1P+k7dk0LvYTJWncAWkbapKa3HtBaZEEGxt8t/wAk6rdPkV3a8GvhqwIkANGwBmPMr2emknDZUcOSDTpuxYmswgWIiAd7EOkjzAt0XHkzLXv2On4KWP08mLiKcOIBkc/VcE41JpFoSbimwtCrUIDGTAuB9Siskq0rgWUIXqZOu+plki2hI/eqrOc1GmJBQ1bHT+ztKq3DgNEF7i8l2wIAEeTZ80+JNRLhi2nRl73Z6m3TsmdR3ZjNqYovLnkWEAdy4esKM5Wmwrk169X+H5LmlwdCOOxVZzjB0mwC6JSbW5xKKTBoBJ02g66C5S5H6RoLcHi9jEDZQQ8iD2eETYb91lvuZ7Khm/IJhRmuhCgplmliIbJ0mApSjboqpbWVqjl2NnMkQQtBHTWjDrWY3OF1ahADaRdYRYfWFzTi3J0i0ccWvVKg3GBWaz+I0MGkF0uM9JTY4SUk2GaxKPpdsxDiB7sMAi8uO55DsFfndnPW4BGghGYh7dHEeaRxXdBJfbH8/Rv6IaI+A6peQb6jjqT80yjXCBYzQnS8gLeCrMBcHTeIc3UEcu6jn5tD47ujVp49kCTVIGgfVgDqIuCuVuXk7sSt76UZBq021DEvphxIBsXCSRPIXXXjklyeflTdqLr3C4/ir65bnhuUZWhv5nU6K3xfiupHPiwLCnp/Uz6rYUckdLLxdlnBVLR1XX0svTRLIt7BtmSNwfVcu6bRVVVkqjIIuCDvy7p8kFGqdgjK+xJlGTDTJLsrbETyMnTskS32M5UrfgLXwRDM24Lp5gtJELoeH+XrvySjmTlp+hQJXI27tnQaODd4R5r1eldY0cuT5gNWqcrr6EW8zfyiPNcORt6vqdMeF9CqXaD991BsIqbyDYkdkE9wNWFeDadwDt1Eqkm9hY0dFh8M9zAWvsdpI6K2l9mMnaCU8DV0tHUghbTIIsfhnhtyIGgbz7KeX0x3YUWPeTSnoud7oujj6r7p3M56JCossgHERqnKWjQkTz6ISae4VaVBMW67R+ECe6mUfNAS+Y9EyVCN2EsOrt50HZMKDc4oBC1auUhsAwN+ZuUkPI8/BXKsmTFKYApRsw8o2Y18A4Fo8dRoAh0EAT0uubJqTe50Y5rZKKbDcQoMFIvaHOmwc4n02KGNb2HLkyPZqjABXQmc5JOgDpjCWoAyUI+aEdelUah2NlSnwNEt0ajAIMLlcZWenjzYVCmyriCbMNsttt9z6Lpk72PLT2JYVhceytgi5S+hPI1FfUjim3M7R6oZ1ubG9thsIbkdFumfqaDk4JYn4u91s6qYcfymhVrMqOaXSRlyNawBrgWgZS6bQS52h2QTTe6EacVt9dyrRY0wHmGxII2Np7n6IJJ7SY021vFbl7h5aXGmDmaYIm9zrNgu/pdErx8o48+pJT4Zl4qiWkg7LgywcXTO2ElJWizgx4B+916HSr+UiOT5invfmV5rpydnQuCLReClVcMwenUcCA2DYjwi5DtQSjdGcUy0KVR+UZWhzWho5kSTJ631ST6hR5DHFV+5sYTB1GgNaXAbkkRJXE+tmuGVUC6ynEhznEnqQPKFGXV5pf7hlFEKtMNIIHQqam5fMw1QJp/hv6SvTxu4ICORKciWMHRzvawbn/lZI0nSNfi3DSx3vKYkRccuqaURITowtZSMou5KnueVh3KcQaUAj0dZOgulm9qGhyCJkyilQrdmtU4cDvCtRFTGHCP8yO5tYv7mP4gjubWL+5X8wjub4iI18M6nlDmtOsHn/NzXPlW9nZ001JVQ7zUqEAEbwNtJtsEkHclZ0Z9UcboygrJs4CQKomuGAUrWYWZbUahZkNVBoZKt9zB8I2XtbzMLT4DHk6LiHCGFgDBBG+ihq3LuCo5zGsdmzOBvzBF1fIldo5oPYGxh5H5JFKhqE4EkADU2HUouVgqiziKXun+7OUuYS1xaZBIOgPTRVhJRaEptNjV2gielu6tnimrFg2nQ2FLYfmY5xjwkEgNPN3PZc0e9jyu1TLLvdtoD7z3Once7iLRo6QE11Ezi9V+wDCHxzoN45Hl+9k+CWmaYmZXCi5j8DVLTUIloGoIMNB35awrdTCV2yODLD5VyV8OYaFfA6xoea9TKK8vudJOBmEoSMaOGIBgWU2x0XKY8Q7FQzfKUD0q7ptbmuVxRi62rmF9VJqmEi+rIgplGjWQb/h1Ov6Bejg/0wHIFVIm77JUJqOefutt3KeC3J5GbXEKr2gkD/hNK0hI02c77tjzcQSSTHoop2y7VIzwLOHIj9EwoMlYIQPygW11SPdj8IE4ynEOzbTXScgVtPotRgjaQ5LAsM2iOSJjL9osPLWEWIdHzH9FHNHY6elm4yZUwuA3zGduS547OzvnklOLic7XbDnDkT9VY4iCajCWRhLGEAglZiRTukYPw7/Eb0M/JTlwNDk6PDY4nNn3MCPRRo6NXk0PbOnFGnbVw/wDkrpy/Kjhw/Mzm6YsoHSVqZiqHfg8f/qMw9QE0eScuClWaQ4gmSDc8zzRezB2LLrtPY/v0XdPeDIrkHTqlkiYPLnIvdcluOxaLV6kRItqJFo37yh2CGwznRlkhrjcdRv11I81SCZLIlyyFHFuAcAYzAB3UTMH6oRyPf3C8cW0/AVpgLthtBE3yVGuXnJlwtetMC9uet/2Fm7Qzk3ya3BsGXyZgKLZSKss4mmGOEm1/opZN47DtUPh3tIGaVyyTvYCLBgaSk3fIRZxGiyW4AtOoHU3Dv9AvRwKsYexyFb4j3VCB13slQAol27nGfKytjWxDI9zXe1OIc9xPh18zLcx+ijPH3RaGTszIx1EiKgFnWIQfkKfYouHyQGFV18gljwNLkiAmFP/Z",
    },
    subtitle: "outward",
  },
  {
    id: "f2ea7616-5ecc-468c-9fda-0ecd689490ac",
    name: "Wow",
    uri: {
      uri:
        "https://cdn.cnn.com/cnnnext/dam/assets/140327194124-himym-cast-horizontal-large-gallery.jpg",
    },
    subtitle: "alike",
  },
]

export function HotFirmCard(props: HotFirmCardProps) {
  const { onPress } = props

  const [activeSlide, setActiveSlide] = React.useState(0)

  const renderItem = ({ item, index }: { item: MovieModel; index: number }, parallaxProps) => {
    const { uri, name, id, subtitle } = item
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          onPress(id)
        }}
      >
        <Card style={styles.itemContainer}>
          <View style={styles.shadow} />

          <View style={styles.imageContainer}>
            <View style={styles.radiusMask} />
            <ParallaxImage
              source={uri}
              containerStyle={styles.imageContainer}
              style={styles.image}
              parallaxFactor={0.4}
              {...parallaxProps}
            />
          </View>
          <View style={styles.overlay}/>
          <Text text={name} style={styles.text} h1 numberOfLines={2} />
          {pagination()}
        </Card>
      </TouchableOpacity>
    )
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
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
        sliderWidth={metrics.screen.width}
        sliderHeight={itemHeight}
        itemWidth={itemWidth}
        enableMomentum={true}
        itemHeight={itemHeight}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.6}
        hasParallaxImages={true}
        renderItem={renderItem}
        autoplay={true}
        loop
        data={data}
        onSnapToItem={index => setActiveSlide(index)}
      />
    </View>
  )
}

HotFirmCard.defaultProps = {
  onPress: () => {
  },
}

const borderRadius = 0
const backgroundColor = "white"

function wp(percentage) {
  const value = (percentage * screen.width) / 100
  return Math.round(value)
}

const itemHorizontalMargin = wp(2)

const styles = StyleSheet.create({
  itemContainer: {
    width: itemWidth,
    height: itemHeight,
    backgroundColor: "white",
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'white'
  },
})
