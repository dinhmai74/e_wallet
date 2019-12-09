import { useReducer } from "react"
import _ from "lodash"
import { useImmerReducer } from "use-immer"

function reducer(draft, action) {
  const { payload } = action
  switch (action.type) {
    case "add": {
      draft.seats.push(payload.seat)
      draft.amount[payload.type] -= 1
      return void draft
    }
    case "remove": {
      draft.seats = draft.seats.filter(val => val !== payload.seat)
      draft.amount[payload.type] += 1
      return void draft
    }
    case "init":{
      draft.seats= payload.seats
      draft.amount= payload.amount
      return void draft
    }
    default:
      return void draft
  }
}
export const useSeat = initialValues => {
  const [values, dispatch] = useImmerReducer(reducer, initialValues)
  return [
    values,
    val => {
      if(val.type==='init'){
        dispatch({type: 'init', payload: val})
      }else{
        let isContained = values.seats.indexOf(val.seat) > -1
        if (isContained) {
          dispatch({ type: "remove", payload: val })
        } else dispatch({ type: "add", payload: val })
      }
    },
  ]
}
