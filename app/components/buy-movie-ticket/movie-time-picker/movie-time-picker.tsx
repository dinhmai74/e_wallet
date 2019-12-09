import * as React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"
import CalendarStrip from "react-native-calendar-strip"
import { icons } from "components"
import { color, spacing } from "theme"
import moment, { months } from "moment"

export interface MovieTimePickerProps {
  [rest: string]: any
}

export function MovieTimePicker(props: MovieTimePickerProps) {
  const highlightColor = color.primary
  return (
    <CalendarStrip
      calendarAnimation={{ type: "sequence", duration: 30 }}
      style={{ height: 100, paddingTop: 5, paddingBottom: 10 }}
      calendarHeaderStyle={{ color: color.textNavy, marginBottom: 20 }}
      highlightDateNameStyle={[{ color: highlightColor }]}
      highlightDateNumberStyle={[styles.marginTop, { color: highlightColor }]}
      dateNumberStyle={{ color: color.textDescription, ...styles.marginTop }}
      startDate={new Date()}
      dateNameStyle={{ color: color.textDescription }}
      showMonth={false}
      minDate={new Date()}
      // @ts-ignore
      maxDate={moment().add(3 * 7, "days")}
      iconLeft={icons.back}
      iconRight={icons.iconFoward}
      iconStyle={styles.icon}
      iconContainer={{ flex: 0.1 }}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  marginTop: {
    marginTop: spacing[2],
  },
  icon: {
    tintColor: color.textNavy,
  },
})
