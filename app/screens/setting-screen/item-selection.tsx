import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon, Text, IconTypes } from 'components'
import { CardItem, Card } from 'native-base'
import { spacing } from 'theme'
import { TranslateKey } from 'i18n/lang'

interface Props {
    icon?: IconTypes
    title?: TranslateKey
}

export class ItemSelection extends Component<Props> {
    render() {
        const { icon, title } = this.props
        return (
            <Card style={styles.container}>
                <CardItem style={styles.wrapper}>
                    <Icon icon={icon} style={styles.styleIcon} />
                    <Text tx={title} />
                </CardItem>
            </Card>


        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: spacing[5],
        width: 100,
        height: 100,
    },
    container: {
    
    },
    styleIcon: {
        paddingBottom: spacing[2],
        paddingTop: spacing[2]
    }
})
export default ItemSelection
