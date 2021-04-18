import {
    Dimensions,
    Platform
} from 'react-native';

module.exports = {
    appName: "BitUBU",
    screen: Dimensions.get('window'),
    screenHeight:  Platform.OS === 'ios' && Dimensions.get('window').height || Dimensions.get('window').height - 24,
    screenWidth:  Dimensions.get('window').width,
    fullScreenHeight:  Dimensions.get('window').height,

    isIphoneX:  Platform.OS === 'ios' && Dimensions.get('window').height === 812,

    appLocalization: ['en', 'de', 'es', 'fr', 'ja', 'ko', 'zh'],

    isIOS: Platform.OS === 'ios',
    isiPAD: ((Dimensions.get('window').height/Dimensions.get('window').width) < 1.6),
    // isiPad: Device.isIpad(),
    isANDROID: Platform.OS === 'android',

    lineBottomColor: '#E2E2E2',
    transparent: 'transparent',
    cancelTokenError: "Operation canceled by cancelToken",

    appScreenBackground: '#f8f8f8'

};
