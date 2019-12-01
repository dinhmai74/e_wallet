import * as React from "react"
import { View, ViewStyle, TextInputProps } from "react-native"
import { Text } from "../text"
import { color } from "theme"
import { getElevation } from "utils"
import { Card } from "native-base"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import MaterialsIcon from "react-native-vector-icons/MaterialIcons"
import { Hideo, Fumi, Kohana } from "react-native-textinput-effects"
import { useEffect, useRef } from "react"
import { translate } from "i18n"

export interface AppInputHideoProps extends TextInputProps {
  onChangeText?: (text: string) => void
  label?: string
  ref?: any
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function AppInputHideo(props: AppInputHideoProps) {
  // grab the props
  const { ref, label, ...rest } = props
  let { ref: refProps } = props
  const refInput = useRef()
  useEffect(() => {
    refProps = refInput
  }, [refInput])

  const labelText = translate(label)

  return (
    <Hideo
      iconClass={FontAwesomeIcon}
      iconName={"envelope"}
      iconSize={15}
      ref={refInput}
      iconColor={color.palette.white}
      // this is used as backgroundColor of icon container view.
      iconBackgroundColor={color.primary}
      inputStyle={{ color: color.textNavy, ...getElevation() }}
      {...rest}
    />
  )
}

AppInputHideo.defaultProps = {
  onChangeText: text => {},
  label: null,
}
