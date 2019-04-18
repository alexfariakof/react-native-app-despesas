import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    body: {
        justifyContent: 'space-between'
    },
    Header: {
        height: 60,
        backgroundColor: '#B3F39D',
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 32,
        color: 'white'
    },
    text: {
        height: 52,
        fontSize: 28,
        color: 'white',
        marginTop: 16,
        marginBottom: 0,
        borderBottomWidth: 2,
        borderColor: '#C4C4C4',
        padding: 4,
    },
    ViewCentralizar: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnOkReceita: {
        width: 100,
        height: 100,
        marginTop: 16,
        marginBottom: 32
    },
    Footer: {
        marginTop: 16,
        height: 100,
        backgroundColor: '#B3F39D'
    },
    textValor: {
        fontSize: 48,
        color: 'white',
        textAlign: 'right',
        marginTop: 16,
        padding: 8
    }
})
