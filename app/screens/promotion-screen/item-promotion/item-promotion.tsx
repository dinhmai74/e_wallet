import React, { Component } from 'react'
import { Icon, Text, Button, View } from 'components'
import NewsCard from 'components/news-card/news-card'
import { spacing } from 'theme'
import { StyleSheet, ImageSourcePropType } from 'react-native'
import { Card } from 'native-base'
import { TranslateKey } from 'i18n/lang'

interface Props {
    label?: TranslateKey
    onPress: () => void
}

export class ItemPromotion extends Component<Props> {
    render() {
        const { label, imageUrl, title, place, numberTime, onPress } = this.props
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text tx={label} style={styles.title} p2 />
                <View style={styles.wrapper} >
                    <Button transparent onPress={onPress}>
                        <Text tx="viewMore" style={{ fontWeight: 'bold', color: '#353535' }} p3 />
                        <Icon icon="iconFoward" />
                    </Button>
                </View>
            </View>


        )
    }
}

export default ItemPromotion

const styles = StyleSheet.create({
    title: {
        paddingLeft: spacing[4],
        paddingTop: spacing[3],
        fontWeight: 'bold',
        color: '#353535',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        paddingRight: spacing[2],
    }
})