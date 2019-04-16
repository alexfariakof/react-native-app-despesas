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
        marginBottom:16,
        alignItems: 'center',
        justifyContent:'center'    
    },
    btnCadastrar:{
        fontSize:24,
        color:'white',        
        marginTop:16, 
        marginBottom:16,
        alignItems: 'center',
        justifyContent:'center'    
    },
    textLogin:{
        height:60,
        fontSize:24,
        color:'white',        
        marginTop:16, 
        marginBottom:0,
        padding:8, 
        backgroundColor:'#C4C4C4'

    },
    textSenha:{
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
    btnIniciar:{
        alignItems: 'center',
        justifyContent:'center'    
    }
})
