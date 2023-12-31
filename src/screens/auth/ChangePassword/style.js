import { StyleSheet } from 'react-native';


export default StyleSheet.create({
 inputContainer:{
     width:'100%',
     height:40,
     borderWidth:2,
     borderColor:'#f68b1f',
     borderRadius:2,
     paddingHorizontal:6,
     justifyContent:'center'
    },
    error:
    {
        width:'90%',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:8,
        marginTop:6
    },
    warn:
    {
        fontSize:12,
        color:'#f68b1f'
    },
})