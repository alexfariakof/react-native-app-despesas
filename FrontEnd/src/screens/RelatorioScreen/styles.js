import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
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
