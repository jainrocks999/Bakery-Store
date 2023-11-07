import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button:{
        backgroundColor:'#F4F4F4',
        paddingHorizontal:18,
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        elevation:3,
        borderColor: '#f68b1f' 
    },
    text:{
        fontFamily:'Montserrat-Medium',
        color:'#000000',
    },
    view:{
        borderWidth:2,
        height:40,
        marginTop:3,
        paddingHorizontal:10,
        borderColor:'#f68b1f',
        borderRadius:2,
        justifyContent:'center'
    },
    heading:{
        color:'#000000',
        fontFamily:'Montserrat-SemiBold',
        fontSize:15
    },
    input:{
        color:'#000000',
        fontFamily:'Montserrat-Medium',
        fontSize:12
    },
    str:{
        color:'#f68b1f',
        fontFamily:'Montserrat-SemiBold',
        fontSize:16,
        marginTop:2,
        marginLeft:4
    },
    add:{
        paddingHorizontal: 24,
        alignItems: 'center',
        backgroundColor: '#f68b1f',
        height: 38,
        justifyContent: 'center',
        borderRadius: 2
    },
    save:{ 
        fontFamily: 'Montserrat-Bold', 
        color: '#fff', 
        fontSize: 17 
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
    title:{
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    enter:{ 
        color: '#fff', 
        fontFamily: 'Montserrat-Bold', 
        fontSize: 20 
    },
    as:{ 
        fontSize: 16, 
        color: '#333333', 
        fontFamily: 'Montserrat-SemiBold' 
    },
    as1:{ 
        fontSize: 13, 
        color: '#333333', 
        fontFamily: 'Montserrat-SemiBold' 
    },
    row:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 16 
    },
    view1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#232323',
        height: 40
    }
})