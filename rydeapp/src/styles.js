import { StyleSheet, Dimensions } from 'react-native';


const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        top: 0
        // bottom: 0,
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
    boldWhiteText: {
        fontSize: 50,
        fontWeight: "bold",
        color: 'white'
    },
    smallWhiteText: {
        fontSize: 20,
        color: 'white',
        top: 0
    },
    tinyLogo: {
        width: 100,
        height: 100,
        top: 7
      },
    borderCol: {
        zIndex: 0,
        flex: 1,
        resizeMode: 'cover',
        // backgroundColor: 'white',
        borderRadius: 30,
        margin: 15,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 10
        
    },
    nodeCameraView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});