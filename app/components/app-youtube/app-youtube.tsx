import * as React from "react"
import YouTube from "react-native-youtube"
import { View } from "components"
import { AppLoading } from "components/app-loading"
import { ActivityIndicator, StyleSheet } from "react-native"
import Modal from "react-native-modal"
import { color } from "theme"
import { useState } from "react"
export interface AppYoutubeProps {
  videoId: string
  style?: any
}

export function AppYoutube(props: AppYoutubeProps) {
  const { videoId, style } = props
  const [ready, setReady] = useState(false)

  return (
    <View>
      <YouTube
        videoId={videoId} // The YouTube video ID
        loop // control whether the video should loop when ended
        onReady={e => setReady(true)}
        style={{ alignSelf: "stretch", height: 150, ...style }}
      />
      {!ready && <ActivityIndicator size="large" color={color.primary} style={styles.loading} />}
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFillObject,
  },
})

AppYoutube.defaultProps = {
  videoId: "KVZ-P-ZI6W4",
}
