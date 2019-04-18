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
        backgroundColor: '#C4C4C4',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textHeader: {
        fontSize: 32,        
        color: 'white'
    },
    text: {
        height: 60,
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
    btnCadastro: {
        width: 100,
        height: 100,
        marginTop: 16,
        marginBottom: 32
    },
    ViewCentralizar:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})
