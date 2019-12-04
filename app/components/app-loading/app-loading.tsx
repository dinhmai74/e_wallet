import * as React from "react"
import { ActivityIndicator } from "react-native"
import Modal from "react-native-modal"
import { color as Colors } from "theme"

export interface AppLoadingProps {
  isVisible: boolean
  color?: string
  hasBackdrop?: boolean
}

export function AppLoading(props: AppLoadingProps) {
  const { isVisible, color, ...rest } = props

  return (
    <Modal isVisible={isVisible} backdropColor={Colors.backdrop} {...rest}>
      <ActivityIndicator size="large" color={color} />
    </Modal>
  )
}

AppLoading.defaultProps = {
  color: Colors.primary,
}
