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
        backgroundColor: '#D45959',
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 32,        
        color: 'white'
    },
    text: {
        fontSize: 24,
        color: 'white',
        marginTop: 4,
        marginBottom: 0,
        borderBottomWidth:2,
        borderColor:'#C4C4C4',
        padding: 4,
        paddingBottom:0
    },
    textCategoria: {
        fontSize: 48,
        margin: 8,
        marginTop: 16,
        marginBottom: 0,
        borderBottomWidth:2,
        borderColor:'#C4C4C4',
        padding: 4,
        paddingBottom:0
    },
    ViewCentralizar:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnOkDespesa: {
        width: 100,
        height: 100,
        marginTop: 16,
        marginBottom: 32
    },
    viewTextValor: {
        
        backgroundColor: '#D45959'        
    },    
    textValor:{
        fontSize:48,
        color:'white',
        textAlign:'right'
    }
})
