import React, { Component } from 'react'
import { Icon, Text, Button, View } from 'components'
import NewsCard from 'components/news-card/news-card'
import { spacing, Fonts, metrics } from 'theme'
import { StyleSheet, ImageSourcePropType } from 'react-native'
import { Card } from 'native-base'
import { TranslateKey } from 'i18n/lang'

interface Props {
    label?: TranslateKey
    onPress: () => void
}

export class ItemPromotion extends Component<Props> {
    render() {
        const { label, onPress } = this.props
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text tx={label} style={styles.title} p3 />
                <View style={styles.wrapper} >
                    <Button transparent onPress={onPress} >
                        <Text tx="viewMore" preset="fieldLabel" bold size={Fonts.size.p3} style={{paddingRight: spacing[1]}} />
                        <Icon icon="iconFoward" size={metrics.icon.tiny} containerStyle={{padding: spacing[0]}} />
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