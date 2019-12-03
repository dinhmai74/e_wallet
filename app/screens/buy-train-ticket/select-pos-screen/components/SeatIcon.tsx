import React from "react"
import { Icon, IconProps } from "components"
import { color } from "theme"

const SeatIcon = ({ ...rest }: IconProps) => {
  return <Icon {...rest} />
}

SeatIcon.defaultProps = {
  icon: "seat",
}

export default SeatIcon
