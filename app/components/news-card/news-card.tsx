import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { CardItem, Left, Body, Thumbnail, Right, } from 'native-base'
import { Text } from 'components/text'
import { Icon } from 'components/icon'
import { spacing } from 'theme'
import { TranslateKey } from 'i18n/lang'
import { IconType } from 'react-native-elements'

interface Props {
    title?: TranslateKey,
    subTitle?: TranslateKey,
    number?: number,
    time?: TranslateKey,
    icon?: IconType
}

export class NewsCard extends Component {
    render() {
        const {title, subTitle, number, time, icon} = this.props
        return (
            <CardItem style={{ backgroundColor: '#f7f8f9' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 100, height: 80, borderRadius: 10 }} source={require('../icon/icons/beef.png')} />
                    <View style={{ paddingLeft: spacing[5], paddingTop: spacing[1] }}>
                        <Text tx={title} style={{  fontWeight: 'bold' }} s2  />
                        <Text tx={subTitle} style={{  color: '#656565' }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Icon icon={icon} style={{ marginRight: 10 }} />
                            <Text tx={number} style={{ paddingRight: spacing[1], color: '#e05a67' }} />
                            <Text tx={time} style={{color: '#696969'}} p3/>
                        </View>

                    </View>
                </View>

            </CardItem>
        )
    }
}

export default NewsCard
