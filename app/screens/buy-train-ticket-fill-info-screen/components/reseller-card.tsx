import React, { useState, useCallback } from "react"
import { SizedBox, Text, View } from "components"
import { TextWithDecoration } from "components/text-with-decoration"
import { Card, CardItem, Input, Item } from "native-base"
import { translate } from "i18n"
import { InputCardItem } from "screens/buy-train-ticket-fill-info-screen/components/InputCardItem"

interface Props {
  errors: any
  onChange?: (v: string, fieldName: string) => void
}

export const ResellerCard = ({ errors, onChange }: Props) => {
  const changeText = useCallback((val, fieldName) => {
    onChange(val, fieldName)
  }, [])

  return (
    <View>
      <TextWithDecoration tx={"trainTicket_resellerInfo"} />
      <SizedBox h={5} />
      <Card>
        <InputCardItem
          error={!!errors.name}
          placeholder={translate("common_name")}
          onChangeText={val => changeText(val, "name")}
        />
        <InputCardItem
          error={!!errors.passport}
          placeholder={translate("common_passport")}
          onChangeText={val => changeText(val, "passport")}
        />
        <InputCardItem
          error={!!errors.email}
          placeholder={translate("common_email")}
          keyboardType={"email-address"}
          onChangeText={val => changeText(val, "email")}
        />
        <InputCardItem
          error={!!errors.phone}
          placeholder={translate("common_phone")}
          onChangeText={val => changeText(val, "phone")}
        />
        <SizedBox h={3} />
      </Card>
    </View>
  )
}

ResellerCard.defaultProps = {
  errors: {
    email: false,
    name: false,
    passport: false,
    phone: false,
  },
}
