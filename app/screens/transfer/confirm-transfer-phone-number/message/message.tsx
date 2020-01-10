import React, { Component } from "react"
import { Image, StyleSheet, View } from "react-native"
import { CardItem, Card, Thumbnail, Input, Item, Textarea } from "native-base"
import { icons, Text } from "components"
import { metrics, spacing, palette } from "theme"
import { TranslateKey } from "i18n/lang"

interface Props {
  transactionDescription?: TranslateKey
}

export class Message extends Component<Props, {}> {
  render() {
    const { transactionDescription } = this.props
    return (
      <Card style={styles.container}>
        <Text tx="message" style={styles.title} t1 color={palette.navy} bold />
        <View style={styles.contentMessage}>
          <Textarea rowSpan={5} placeholder="Message"  bordered={false} underline={true}/>
        </View>
      </Card>
    )
  }
}

export default Message

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[7],
  },
  title: {
    fontStyle: "italic",
    paddingTop: spacing[4],
    paddingBottom: spacing[4],
  },
  contentMessage: {
    flexDirection: "column",
    paddingBottom: spacing[7],
  },
})
