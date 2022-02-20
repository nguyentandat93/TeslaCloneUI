import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, Alert, ScrollView } from 'react-native'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu'

export const CarItem = () => {
    const [ locked, setLocked ] = useState(false)
    return (
        <View style={styles.carContainer}>

            <ImageBackground 
                source={require('../../assets/background.png')}
                style={styles.background}
            />

            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon 
                        icon={ faCog } 
                        size={24} 
                        style={styles.icon} 
                    />
                </TouchableOpacity>
                
                <Text style={styles.headerTitle}>My Model 3 </Text>

                <TouchableOpacity>
                    <FontAwesomeIcon 
                        icon={ faToolbox } 
                        size={24} 
                        style={styles.icon} 
                    />
                </TouchableOpacity>
                
            </View>

            <View style={styles.batterySection}>
                <Image 
                    source={require('../../assets/battery.png')}
                    style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>
                    150mi
                </Text>
            </View>

            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>

            {/* Control icons */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.controls}>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon 
                                icon={ faFan }
                                size={24}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon 
                                icon={ faKey }
                                size={24}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            if(locked) {
                                setLocked(false)
                                Alert.alert(
                                    'Warning',
                                    'You unlocked the car!'
                                )
                            } else {
                                setLocked(true)
                                Alert.alert(
                                    'Warning',
                                    'You locked the car!'
                                )
                            }
                        }}
                    >
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon 
                                icon={ locked ? faLock : faUnlock }
                                size={24}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                    
                </View>

                {/* Menu here */}
                <Menu />
            </ScrollView>

        </View>
    )
}