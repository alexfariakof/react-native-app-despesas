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
        backgroundColor: '#C4C4C4',
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 48,        
        color: 'white',
        backgroundColor: '#C4C4C4'
    },
    text: {
        fontSize: 24,
        color: 'white',
        margin: 8,
        marginTop: 16,
        marginBottom: 0,
        borderBottomWidth:2,
        borderColor:'#C4C4C4',
        padding: 4,
        paddingBottom:0
    },
    Footer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnCadastro: {
        width: 100,
        height: 100,
        marginTop: 16,
        marginBottom: 32
    }
})
