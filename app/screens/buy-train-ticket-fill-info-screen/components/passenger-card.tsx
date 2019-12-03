import React, { useState, useRef, useEffect } from "react"
import { SizedBox, Text, View } from "components"
import { Card, CardItem, Form, Item, Label, Input, Icon, Left, Right } from "native-base"
import { color, spacing } from "theme"
import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { translate } from "i18n"
import { InputCardItem } from "screens/buy-train-ticket-fill-info-screen/components/InputCardItem"

export interface PassengerInfo {
  name: string
  passport: string
}

interface Props {
  label: string
  value: PassengerInfo
  showContent?: boolean
  onChange?: (value: PassengerInfo) => void
}

export const PassengerCard = ({ showContent, label, value, onChange }: Props) => {
  const [show, setShow] = useState(false)
  const [name, setname] = useState("")
  const [passport, setpassport] = useState("")
  useEffect(() => {
    setShow(showContent)
  }, [showContent])

  const renderShow = () => {
    return (
      <>
        <InputCardItem
          value={value.name}
          placeholder={translate("common_name")}
          onChangeText={val => {
            setname(val)
            onChange({ name: val, passport })
          }}
        />
        <InputCardItem
          value={value.passport}
          placeholder={translate("common_passport")}
          onChangeText={val => {
            setpassport(val)
            onChange({ name, passport: val })
          }}
        />
      </>
    )
  }

  const renderCollapse = () => {
    let tx = "common_info"
    if (value.name) {
      tx = `${value.name} - ${value.passport}`
    }
    return (
      <>
        <SizedBox h={3} />
        <CardItem>
          <Left>
            <Text
              //@ts-ignore
              tx={tx}
              color={color.description}
            />
          </Left>
          <Right>
            <Icon name={"ios-arrow-forward"} />
          </Right>
        </CardItem>
      </>
    )
  }

  return (
    <>
      <Text
        //@ts-ignore
        tx={`Seat: ${label}`}
        style={{ marginVertical: spacing[4], marginLeft: spacing[2] }}
      />
      <Card style={styles.container}>
        <TouchableOpacity onPress={() => setShow(pre => !pre)}>
          {show ? renderShow() : renderCollapse()}
        </TouchableOpacity>
      </Card>
    </>
  )
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
  },
  container: {
    paddingHorizontal: spacing[2],
    paddingBottom: spacing[4],
  },
})

PassengerCard.defaultProps = {
  onChange: () => {},
}
