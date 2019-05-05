import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },  
    containerColumn: {
        height: 52,
        flexDirection: 'column',
        flex: 2,
        padding: 2,
    },
    containerHeader:{
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
    },
    textHeaderContainer:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerBodyGraphics:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flex: 3
    },
    containerHeaderGraphics:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        flex: 2
    },
    textSaldoDespesa:{
        fontSize: 28, 
        fontWeight: 'bold', 
        color: '#F39D9D'
    },
    textSaldoReceita:{
        fontSize: 28, 
        fontWeight: 'bold', 
        color: '#B3F39D'
    },
    containerGraphics:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
        marginBottom: 4,
        padding: 4,
    },
    containerGraphicsBar:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 2,
        alignItems: 'flex-end',
    },
    containerGraphicsBarText:{
        flex: 1,
        flexDirection:'column',
    },
    textMes:{
        fontWeight: 'bold'
    }    
})
