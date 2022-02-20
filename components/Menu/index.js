import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import items from './items'

const Menu = () => {

    return (
        <View style={styles.menuItems}>
        {items.map(item => (
            <TouchableOpacity
                key={item.id}
            >
                <View style={styles.menuRow}>
                    <FontAwesomeIcon 
                        icon={item.icon}
                        style={styles.icon}
                        size={24}
                    />
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>{item.title}</Text>
                        {item.subTitle && <Text style={styles.subTitle}>{item.subTitle}</Text>}
                    </View>
                    <FontAwesomeIcon 
                        icon={faChevronRight}
                        style={styles.arrowIcon}
                        size={24}
                    />
                </View>
            </TouchableOpacity>
        ))}
        </View>
    )
}

export default Menu