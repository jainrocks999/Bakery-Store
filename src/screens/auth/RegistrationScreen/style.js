import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 40,
        borderWidth: 2,
        borderColor: '#f68b1f',
        borderRadius: 2,
        paddingHorizontal: 6,
        justifyContent: 'center'
    },
    error:
    {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 8,
        marginTop: 6
    },
    warn:
    {
        fontSize: 12,
        color: '#f68b1f'
    },
    input: {
        fontFamily: 'Montserrat-Medium',
        width: '100%',
        includeFontPadding: false,
        padding: 0,
        margin: 0
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    register: {
        color: '#f68b1f',
        fontFamily: 'Montserrat-Bold',
        fontSize: 22
    },
    cont: {
        paddingHorizontal: 20,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ready: {
        color: '#000000',
        fontSize: 13,
        fontFamily: 'Montserrat-Medium'
    },
    here: {
        color: '#000000',
        fontSize: 13,
        // borderBottomWidth: 1,
        marginTop: 1,
        fontFamily: 'Montserrat-Medium'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pass: {
        fontFamily: 'Montserrat-Medium',
        width: '80%',
        includeFontPadding: false,
        padding: 0,
        margin: 0
    },
    space: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'center'
    },
    have: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    read: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Montserrat-Medium',
    },
    policy: {
        fontSize: 13,
        color: '#000',
        fontFamily: 'Montserrat-Medium',
    },
    bView: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 30
    },
    touch: {
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f68b1f',
        borderRadius:2
    },
    sign: {
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-bold',
    },
    sign1: {
        fontSize: 18,
        color: '#f68b1f',
        fontFamily: 'Montserrat-bold',
      
    },
    bottom: {
        bottom: 30,
        left: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center'
    }
})