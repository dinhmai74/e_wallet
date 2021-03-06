import { AppRegistry, StyleSheet, Text, TouchableOpacity, Linking } from "react-native"
import React, { Component } from "react"

export class ScanCodeScreen extends Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err => console.error("An error occured", err))
  }

  render() {
    return (
      <TouchableOpacity style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>OK. Got it!</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
})
export default ScanCodeScreen
