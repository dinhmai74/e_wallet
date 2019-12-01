import * as React from "react"
import { TextInputProps, View, ViewStyle, StyleSheet } from "react-native"
import { color, spacing } from "theme"
import { translate } from "i18n"
import { Item, Icon, Input, NativeBase } from "native-base"

type type =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Foundation"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "Octicons"
  | "SimpleLineIcons"
  | "Zocial"

export interface AppInputFieldProps extends TextInputProps {
  icon: string
  iconType: type
  ref?: any
}

export function TextInputWithIcon(props: AppInputFieldProps) {
  // grab the props
  const { icon, ref, placeholder, iconType, ...rest } = props
  const placeHolderText = translate(placeholder)

  return (
    <Item style={{ paddingBottom: spacing[1] }}>
      <Icon
        active
        name={icon}
        type={iconType}
        style={{
          color: color.description,
        }}
      />
      <Input placeholder={placeHolderText} {...rest} />
    </Item>
  )
}

TextInputWithIcon.defaultProps = {
  iconType: "Ionicons",
}
