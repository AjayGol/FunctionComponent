import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Keyboard,
    KeyboardEvent,
    TextInput
} from 'react-native';
import NavBar from "../../../../../commonComponent/navBar/navBar";
import {useNavigation} from "@react-navigation/native";
import Constant from "../../../../../../helpers/constant";
import ButtonNew from "../../../../../../helpers/button"
import {connect} from "react-redux";
import {setKeyboardHeight} from "../../../../../../actions/userActions";
import Animated, {Easing} from "react-native-reanimated";
import CountryPicker from 'react-native-country-picker-modal'
import {strLocale} from "locale";

const smsAuthentication = (props) => {
    const navigation = useNavigation();

    const {container, outerTextView, textTitle, textDescription, boxView} = styles;

    const bottomViewAnimation = new Animated.Value(-(props.safeAreaInsetsData.bottom + 20));
    const [countryCode, setCountryCode] = useState('+41')
    const [phoneNumber, setPhoneNumber] = useState('')

    function onKeyboardDidShow(e: KeyboardEvent): void {
        Animated.timing(bottomViewAnimation, {
            toValue: -(e.endCoordinates.height + 20),
            duration: 200,
            easing: Easing.linear,
        }).start();
    }

    function onKeyboardDidHide(): void {

        Animated.timing(bottomViewAnimation, {
            toValue: -(props.safeAreaInsetsData.bottom + 20),
            duration: 200,
            easing: Easing.linear,
        }).start();
    }

    useEffect(() => {
        // Keyboard.addListener('keyboardWillShow', onKeyboardDidShow);
        // Keyboard.addListener('keyboardWillHide', onKeyboardDidHide);
        // return (): void => {
        //     Keyboard.removeListener('keyboardWillShow', onKeyboardDidShow);
        //     Keyboard.removeListener('keyboardWillHide', onKeyboardDidHide);
        // };
    }, []);

    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onPressButton = (id) => {

    }

    const onConfirm = () => {
        navigation.navigate('smsconfirmation')
    };

    const selectCountry = (country) => {
        if (country.callingCode){
            setCountryCode(`+${country.callingCode}`)
        }
    }

    //Ashish Thakkar - Angel
    //Carrer Line/Shree hari
    //
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={strLocale("security.SMS Authentication")}
                    backScreenName={strLocale("security.Security")}
                    onPressBack={onPressBack}/>

            <ScrollView
                style={[container]}
                bounces={false}
            >
                <View>
                    <View style={outerTextView}>
                        <Text style={textTitle}>{strLocale("security.SMS Authentication")}</Text>
                        <Text
                            style={[textDescription]}>{strLocale("security.SmsDescription")}</Text>
                    </View>
                </View>

                <View style={boxView}>
                    <View style={{position: 'absolute'}}>
                        <View style={{
                            position: 'absolute',
                            width: 83,
                            height: 54,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <Text style={textTitle}>{countryCode}</Text>
                            <Image resizeMode="contain" source={{uri: 'icon_arrowdown'}}
                                   style={{width: 12, height: 8, marginLeft: 4}}/>
                        </View>
                        <CountryPicker
                            onSelect={(value) => selectCountry(value)}
                            translation='eng'
                            // initialCountry={'us'}
                            placeholder={''}
                            containerButtonStyle={{width: 83, height: 54}}
                            filterPlaceholderTextColor={'red'}
                        />
                    </View>

                    <View style={{ position: 'absolute', left: 80, right: 0, top: 0, bottom: 0}}>
                        <TextInput style={{paddingHorizontal: 10, marginHorizontal: 10, height: '100%'}}
                                   // ref={antiCodeRef}
                                   placeholder={strLocale("security.Phone number")}
                                   autoCorrect={false}
                                   value={phoneNumber}
                                   keyboardType={'number-pad'}
                                   autoFocus={false}
                                   returnKeyType={'next'}
                                   maxLength = {15}
                                   onChangeText={(text) => {
                                       setPhoneNumber(text)
                                   }}/>
                    </View>

                    {/*<PhoneInput*/}
                    {/*    initialCountry={'us'}*/}
                    {/*    initialValue="13178675309"*/}
                    {/*    textProps={{*/}
                    {/*        placeholder: 'Enter a phone number...'*/}
                    {/*    }}*/}
                    {/*/>*/}

                    <View style={{marginLeft: 83, height: 54, backgroundColor: '#C3D3D4', width: 1}}/>
                    <View style={{position: "absolute"}}>
                    </View>
                </View>
            </ScrollView>

            <Animated.View style={[{
                bottom: 0, left: 0, right: 0, position: 'absolute',
                opacity: 1, transform: [{translateY: bottomViewAnimation}]
            }]}>
                <ButtonNew
                    title={strLocale("security.Send Code")}
                    onConfirm={onConfirm}/>
            </Animated.View>
            {/*<View style={{position: 'absolute', bottom: 20 + props.safeAreaInsetsData.bottom, width: Constant.screenWidth}}>*/}
            {/*    <ButtonNew*/}
            {/*    title={"Confirm"}/>*/}
            {/*</View>*/}
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
        marginHorizontal: 20,
        marginTop: 26
    },
    textTitle: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
        color: '#222222',
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#7E7E7E',
        marginTop: 10,
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
    boxView: {
        marginTop: 20,
        height: 56,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C3D3D4',
        marginHorizontal: 20
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
})(smsAuthentication);
