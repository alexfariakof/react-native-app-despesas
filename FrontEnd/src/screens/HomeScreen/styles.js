import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    background:{
        flex : 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    body:{
        justifyContent: 'space-between'
    },
    textBenVindo:{
        fontSize:48,
        color:'white',        
        marginTop:16, 
        marginBottom:0,
        alignItems: 'center',
        justifyContent:'center'    
    },
    ViewCentralizar: {
        justifyContent: 'center',
        alignItems: 'center'
    },    
    btnCadastrar:{
        fontSize:24,
        color:'white',        
        marginTop:4, 
        marginBottom:16,
        alignItems: 'center',
        justifyContent:'center'    
    },
    text:{
        height:60,
        fontSize:24,
        color:'white',        
        marginTop:16, 
        marginBottom:0,
        padding:8, 
        backgroundColor:'#C4C4C4'
    },
    btnEsqueciSenha:{
        fontSize:24,
        color:'white',        
        marginTop:4, 
        marginBottom:16,
        alignItems: 'center',
        justifyContent:'center'    
    }, 
    btnIniciar: {
        width: 100,
        height: 100,
        marginTop: 16,
        marginBottom: 32
    }
})