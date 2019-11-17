import * as React from "react"
import { TouchableOpacity, TextStyle, ViewStyle, View } from "react-native"
import { Icon } from "react-native-elements"
import { Text } from "../text"
import { color, spacing } from "../../theme"
import { CheckboxProps } from "./checkbox.props"
import { mergeAll, flatten } from "ramda"

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

const FILL: ViewStyle = {
  width: DIMENSIONS.width - 4,
  height: DIMENSIONS.height - 4,
  backgroundColor: color.primary,
}

const icon: ViewStyle = {
  alignSelf: "center",
}

const LABEL: TextStyle = { paddingLeft: spacing[2], color: color.textNavy }

export function Checkbox(props: CheckboxProps) {
  const numberOfLines = props.multiline ? 0 : 1

  const disabledStyle = { opacity: 0.3 }

  const rootStyle = mergeAll(flatten([ROOT, props.style, !props.value && disabledStyle]))
  const outlineStyle = mergeAll(
    flatten([OUTLINE, props.outlineStyle, !props.value && { borderColor: color.checkboxInactive }]),
  )
  const fillStyle = mergeAll(flatten([FILL, props.fillStyle]))

  const onPress = props.onToggle ? () => props.onToggle && props.onToggle(!props.value) : null

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={!props.onToggle}
      onPress={onPress}
      style={rootStyle}
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
