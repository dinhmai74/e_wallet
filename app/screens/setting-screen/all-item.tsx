import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ItemSelection from './item-selection'
import { icons } from 'components'
import { Card } from 'native-base'
import { spacing } from 'theme'

export class AllItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ItemSelection icon="iconLock" title="security" />
                <ItemSelection icon="iconProfile" title="profile" />
                <ItemSelection icon="iconPrivacy" title="privacy" />
                <ItemSelection icon="iconLock" title="security" />
                <ItemSelection icon="iconProfile" title="profile" />
                <ItemSelection icon="iconPrivacy" title="privacy" />
                <ItemSelection icon="iconLock" title="security" />
                <ItemSelection icon="iconProfile" title="profile" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: "wrap"
    }
})

export default AllItem
