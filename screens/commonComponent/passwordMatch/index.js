import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Keyboard,
    KeyboardEvent,
    TextInput, ActivityIndicator
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Constant from "../../../helpers/constant";
import {connect} from "react-redux";
import {setKeyboardHeight} from "../../../actions/userActions";
import Animated, {Easing} from "react-native-reanimated";

const passwordMatch = (props) => {
    const navigation = useNavigation();

    const [bottomButton, setBottomButton] = useState((props.safeAreaInsetsData.bottom + 20));
    const [isWrong, setIsWrong] = useState(false);

    const [txt1, setTxt1] = useState('');
    const [txt2, setTxt2] = useState('');
    const [txt3, setTxt3] = useState('');
    const [txt4, setTxt4] = useState('');

    const inputRefTxt1 = useRef(null);
    const inputRefTxt2 = useRef(null);
    const inputRefTxt3 = useRef(null);
    const inputRefTxt4 = useRef(null);

    const bottomViewAnimation = new Animated.Value(props.safeAreaInsetsData.bottom + 20);

    function onKeyboardDidShow(e: KeyboardEvent): void {
        setBottomButton(e.endCoordinates.height + 20)
    }

    useEffect(() => {
        Keyboard.addListener('keyboardWillShow', onKeyboardDidShow);
        return (): void => {
            Keyboard.removeListener('keyboardWillShow', onKeyboardDidShow);
        };
    }, []);

    useEffect(() => {
        if (props.isWrongPassword === true) {
            setIsWrong(true)
            removeValues()
        }
    }, [props.isWrongPassword]);

    useEffect(() => {
        if (props.isCompletedVarification === true) {
            navigation.navigate(props.redirectPage);
        }
    }, [props.isCompletedVarification]);

    const setValues = (ref) => {
        switch (ref) {
            case "1":
                setTxt1('')
                setTxt2('')
                setTxt3('')
                setTxt4('')
                break;
            case "2":
                setTxt1('')
                setTxt2('')
                break;
            case "3":
                setTxt2('')
                setTxt3('')
                break;
            case "4":
                setTxt3('')
                break;
        }
    };

    const removeValues = () => {
        inputRefTxt1.current.focus();
        setTxt1('')
        setTxt2('')
        setTxt3('')
        setTxt4('')
    };

    const onlastDigitEncountered = (text) => {
        if (props.isRealAPI) {
            let number = `${txt1}${txt2}${txt3}${text}`
            props.onCompletePattern(number)
            Keyboard.dismiss();
        } else {
            setTimeout(() => {
                if (props.isShowingError) {
                    setIsWrong(true)
                    removeValues()
                } else {
                    props.onCompletePattern()
                }

            }, 100);
        }
    }

    const onKeyPress = (e, textNo) => {
        try {
            var prevField = parseInt(textNo) - 1;
            if (e.nativeEvent.key === 'Backspace') {

                if (Math.abs(this.lastKeyEventTimestamp - e.timeStamp) < 20) return;

                let valueFocus = 1;
                if (textNo == '1') {
                    valueFocus = textNo;
                } else {
                    valueFocus = prevField;
                }
                switch (valueFocus) {
                    case 1:
                        inputRefTxt1.current.focus();
                        break;
                    case 2:
                        inputRefTxt2.current.focus();
                        break;
                    case 3:
                        inputRefTxt3.current.focus();
                        break;
                    case 4:
                        inputRefTxt4.current.focus();
                        break;
                }
                setValues(textNo);
            } else {
                this.lastKeyEventTimestamp = e.timeStamp;
            }
        } catch (e) {

        }
    };

    const {container, inputBox, textbox, errorBox, errorName} = styles;

    return (
        <View>
            <View style={{
                height: 56,
                marginHorizontal: 20,
                flexDirection: 'row'
            }}>
                <View style={[inputBox, {borderColor: isWrong && '#F84960' || '#0073F7'}]}>
                    <TextInput style={[textbox]}
                               ref={inputRefTxt1}
                               autoCorrect={false}
                               onKeyPress={(e) => onKeyPress(e, '1')}
                        // selectionColor={Constant.transparent}
                               value={txt1}
                               autoFocus={true}
                               keyboardType={'number-pad'}
                               returnKeyType={'next'}
                               onChangeText={(text) => {
                                   setTxt1(text)
                                   setIsWrong(false)
                                   inputRefTxt2.current.focus();
                               }}/>
                </View>
                <View style={[inputBox, {
                    marginLeft: 10,
                    borderColor: isWrong ? '#F84960' : (txt1 === '' && '#C3D3D4' || '#0073F7')
                }]}>
                    <TextInput style={[textbox]}
                               ref={inputRefTxt2}
                               autoCorrect={false}
                               onKeyPress={(e) => onKeyPress(e, '2')}
                        // selectionColor={Constant.transparent}
                               value={txt2}
                               autoFocus={false}
                               keyboardType={'number-pad'}
                               returnKeyType={'next'}
                               onChangeText={(text) => {
                                   setTxt2(text)
                                   inputRefTxt3.current.focus();
                               }}/>
                </View>
                <View style={[inputBox, {
                    marginLeft: 10,
                    borderColor: isWrong ? '#F84960' : (txt2 === '' && '#C3D3D4' || '#0073F7')
                }]}>
                    <TextInput style={[textbox]}
                               ref={inputRefTxt3}
                               autoCorrect={false}
                               onKeyPress={(e) => onKeyPress(e, '3')}
                        // selectionColor={Constant.transparent}
                               value={txt3}
                               autoFocus={false}
                               keyboardType={'number-pad'}
                               returnKeyType={'next'}
                               onChangeText={(text) => {
                                   setTxt3(text)
                                   inputRefTxt4.current.focus();
                               }}/>
                </View>
                <View style={[inputBox, {
                    marginLeft: 10,
                    borderColor: isWrong ? '#F84960' : (txt3 === '' && '#C3D3D4' || '#0073F7')
                }]}>
                    <TextInput style={[textbox]}
                               ref={inputRefTxt4}
                               autoCorrect={false}
                               onKeyPress={(e) => onKeyPress(e, '4')}
                        // selectionColor={Constant.transparent}
                               value={txt4}
                               autoFocus={false}
                               keyboardType={'number-pad'}
                               returnKeyType={'next'}
                               onChangeText={(text) => {
                                   setTxt4(text)
                                   setTimeout(() => {
                                       onlastDigitEncountered(text)
                                   }, 100)
                               }}/>
                </View>

                {
                    isWrong === true &&
                    <View style={errorBox}>
                        <Text style={errorName}>
                            {"Wrong code. Please try again."}
                        </Text>
                    </View>
                }

                {
                    props.isLoading && props.isLoading === true &&
                    <View style={[errorBox, {bottom: -40}]}>
                        <ActivityIndicator color={"#0073F7"}/>
                    </View>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        width: '100%',
        flex: 1,
    },
    textBorder: {
        backgroundColor: '#e3e8ec',
        height: 1,
        alignSelf: 'center',
        marginLeft: 36,
        marginTop: 3.5,
        width: (Constant.screenWidth > 400 && Constant.isiPAD) ? 400 - 36 : Constant.screenWidth - 84
    },
    outerTextView: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
        marginHorizontal: 20,
        marginTop: 15,
        alignItems: 'center'
    },
    textTitle: {
        color: '#222222',
        marginTop: 0,
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
    },
    textDescription: {
        color: '#7E7E7E',
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
    },
    textBottomLink: {
        color: '#0073F7',
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 22,
        marginTop: 63,
        textDecorationLine: 'underline',
    },
    errorName: {
        color: '#F84960',
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
    },
    inputStyle: {
        borderWidth: 0,
        color: '#000000',
        fontSize: 16,
        height: 48,
        fontFamily: 'System',
        fontWeight: 'normal',
        marginRight: 30
    },
    inputBox: {
        width: (Constant.screenWidth - 70) / 4,
        height: '100%',
        borderWidth: 1,
        borderColor: '#C3D3D4',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbox: {
        height: Constant.isIOS && 30 || 40,
        width: 30,
        margin: 3,
        color: '#000000',
        textAlign: 'center'
    },
    errorBox: {
        position: 'absolute',
        left: 0,
        bottom: -28,
        width: '100%',
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
        keyboardHeight: state.user.keyboardHeight || 0,
    };
};

export default connect(mapStateToProps, {
    setKeyboardHeight
})(passwordMatch);
