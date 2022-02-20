import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    menuItems: {
        padding: 20
    },
    menuRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14
    },
    icon: {
        color: '#fff'
    },
    menuText: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    menuTextBox: {
        flexGrow: 1
    },
    arrowIcon: {
        color: '#4d4d4e'
    },
    subTitle: {
        color: '#fff',
        paddingLeft: 10,
        fontSize: 14
    }
})
export default styles