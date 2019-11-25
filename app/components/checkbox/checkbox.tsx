import * as React from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Icon } from "react-native-elements"
import { Text } from "../text"
import { color, spacing } from "../../theme"
import { CheckboxProps } from "./checkbox.props"
import { flatten, mergeAll } from "ramda"

const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[1],
  alignSelf: "flex-start",
  justifyContent: "center",
  alignItems: "center",
}

const DIMENSIONS = { width: 16, height: 16 }

const OUTLINE: ViewStyle = {
  ...DIMENSIONS,
  marginTop: 2, // finicky and will depend on font/line-height/baseline/weather
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderColor: color.primary,
  borderRadius: 1,
}

const icon: ViewStyle = {
  alignSelf: "center",
}

const LABEL: TextStyle = { paddingLeft: spacing[2], color: color.textNavy }

export function Checkbox(props: CheckboxProps) {
  const numberOfLines = props.multiline ? 0 : 1

  const rootStyle = mergeAll(flatten([ROOT, props.style]))
  const outlineStyle = mergeAll(
    flatten([OUTLINE, props.outlineStyle, !props.value && { borderColor: color.checkboxInactive }]),
  )

  const { value } = props

  const onPress = () => {
    props.onToggle(!value)
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={value}
      onPress={onPress}
      style={[rootStyle, !value && { opacity: 0.3 }]}
    >
      <View style={outlineStyle}>
        {props.value && (
          <Icon name="md-checkmark" color={color.primary} type="ionicon" style={icon} size={10} />
        )}
      </View>
      <Text
        text={props.text}
        tx={props.tx}
        numberOfLines={numberOfLines}
        style={LABEL}
        preset="b2"
      />
    </TouchableOpacity>
  )
}

Checkbox.defaultProps = {
  toggle: () => {},
}
