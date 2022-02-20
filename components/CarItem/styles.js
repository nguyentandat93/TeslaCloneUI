import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#333'
    },
    header: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 11
    },
    headerTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: '#fff'
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover'
    },
    batterySection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    batteryImage: {
        width: 70,
        height: 26,
        marginRight: 12
    },
    batteryText: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    status: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '40%'
    },
    controlsButton: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        padding: 18
    }
})

export default styles