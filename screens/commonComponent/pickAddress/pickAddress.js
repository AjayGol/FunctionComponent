import React, {Component, useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView, TouchableOpacity, Image,
} from "react-native";
import {connect} from 'react-redux';
import Constant from "../../../helpers/constant";
import Animated, {Easing} from "react-native-reanimated";
import ButtonNew from "../../../helpers/button";
import RoutingComponents from "../../tabs/accountTab/component/routingComponents";
import _, {cloneDeep} from "lodash";
import {strLocale} from "locale";


const addressPicker = (props) => {
    const backgroundOpacity = new Animated.Value(0);
    const offset = new Animated.Value(Constant.screenHeight / 2);

    const [selectedIndex, setselectedIndex] = useState(0)
    const [addressList, setAddressList] = useState([{
        title: 'mylabel',
        subTitle: '1AucH58u1nuwD4ABoaqfgeTPPW6joLHihL',
        valueType: 'BTC',
        isSelected: true
    }, {
        title: 'mylabel2',
        subTitle: '1AucH58u1nuwD4ABoaqfgeTPPW6joLHihL',
        valueType: 'BTC2',
        isSelected: false
    }, {
        title: 'mylabel',
        subTitle: '1AucH58u1nuwD4ABoaqfgeTPPW6joLHihL',
        valueType: 'BTC',
        isSelected: false
    }])


    useEffect(() => {
        Animated.timing(backgroundOpacity, {
            toValue: 0.6,
            duration: 200,
            easing: Easing.linear,
        }).start();

        Animated.timing(offset, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear,
        }).start();
    }, []);

    const onSelectAddressChange = (index) => {
        try {
        }catch (e) {

        }

        // let obj = _.find(addressList,{isSelected: true});
        // let objIndex = addressList.indexOf(obj);

    }

    const onConfirm = (value = {},isCompleted = true) => {
        Animated.timing(backgroundOpacity, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear,
        }).start();

        Animated.timing(offset, {
            toValue: Constant.screenHeight / 2,
            duration: 200,
            easing: Easing.linear,
        }).start(() => {
            if (isCompleted === true) {
                props.onComplete()
            }
        });
    }

    const onAddressAdd = () => {
        onConfirm({}, false)
        setTimeout(() => {
            props.onAddAddress()
        }, 200)
    }

    const {container, titleText, pickerTitle, pickerDescription, noAddress, addAddress} = styles;
    return (
        <View style={styles.outerView}>
            <Animated.View style={[styles.transparentView, {
                backgroundColor: 'black',
                opacity: backgroundOpacity, blurRadius: 1,
            }]}/>

            <Animated.View
                style={[{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    minHeight: 200,
                    maxHeight: Constant.screenHeight / 2,
                    backgroundColor: '#FFF'
                }
                    , {transform: [{translateY: offset}]}]}>
                <View style={{flex: 1, marginBottom: props.safeAreaInsetsData.bottom}}>
                    <View sty={{width: '100%'}}>
                        <Text style={[titleText]}>{strLocale("wallet.SelectAddress")}</Text>
                        <View style={{width: '100%', height: 1, marginTop: 8, backgroundColor: '#F8F8FB'}}/>
                    </View>
                    <ScrollView
                        style={[container, {maxHeight: (Constant.screenHeight / 2) - props.safeAreaInsetsData.bottom - 100}]}
                    >
                        {
                            addressList.length === 0 &&
                            <TouchableOpacity onPress={onAddressAdd} style={{flex: 1, marginTop: 31, marginBottom: 21}}>
                                <Text style={[noAddress]}>{"No Address"}</Text>
                                <View style={{marginTop: 21, alignItems: 'center'}}>
                                    <View style={{borderWidth: 1, width: 100, height: 35, borderColor: '#010522', justifyContent: 'center',
                                    borderRadius: 4}}>
                                        <Text style={[addAddress]}>{"No Address"}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                        {
                            addressList.map((objData, index) => {
                                return (
                                    <TouchableOpacity onPress={() => onSelectAddressChange(index)} style={{
                                        minHeight: 45,
                                        marginHorizontal: 15,
                                        marginVertical: 10,
                                        flexDirection: 'row',
                                    }}
                                                      key={index.toString()}
                                    >
                                        <View style={{flex: 1}}>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Text style={[pickerTitle]}>{objData.title}</Text>
                                                <Text style={[pickerTitle, {
                                                    fontSize: 8,
                                                    marginLeft: 11
                                                }]}>{objData.valueType}</Text>
                                            </View>
                                            <Text style={[pickerDescription]}>{objData.subTitle}</Text>
                                        </View>
                                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                            {
                                                objData.isSelected &&
                                                <Image resizeMode="contain" source={{uri: 'icon_whiteright'}}
                                                       style={{width: 16, height: 16, tintColor: '#008763'}}/>
                                            }
                                        </View>
                                        {
                                            index === selectedIndex &&
                                            <View style={{
                                                position: 'absolute',
                                                bottom: -5.5,
                                                left: 0,
                                                right: 0,
                                                height: 1,
                                                backgroundColor: '#F8F8FB'
                                            }}/>
                                        }
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </ScrollView>
                    <ButtonNew
                        title={strLocale("Confirm")}
                        onConfirm={onConfirm}
                        isMainStyle={{backgroundColor: addressList.length === 0 && '#F8F8FB' || '#008763'}}
                        isTextStyle={{color: addressList.length === 0 && '#7E7E7E' ||  '#FFFFFF'}}/>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    outerView: {
        width: Constant.screenWidth,
        height: Constant.screenHeight,
        top: 0, left: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000',
        textAlign: 'center',
        marginTop: 4
    },
    pickerTitle: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 10,
        color: '#010522',
        textAlign: 'center',
        marginTop: 4
    },
    pickerDescription: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 8,
        color: '#010522',
        marginTop: 10
    },
    noAddress: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 12,
        color: '#000000',
        opacity: 0.5,
        textAlign: 'center',
    },
    addAddress: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 12,
        color: '#010522',
        textAlign: 'center',
    },
    transparentView: {
        top: 0, left: 0, right: 0, bottom: 0, position: 'absolute',
        backgroundColor: '#173d51',
        opacity: 0.9, alignItems: 'center', justifyContent: 'center'
    },
    innerPopupView: {
        width: Constant.screenWidth - 48,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 13,
        paddingTop: 24,
        marginBottom: 10,
        maxWidth: 400,
        paddingBottom: 24,
    },
    subTitle: {
        color: "#dfecec",
        fontSize: 14,
        marginTop: 3,
        fontFamily: 'System',
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 24
    },
    topTitle: {
        color: "#000000",
        fontSize: 20,
        fontFamily: 'System',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInput: {
        height: 120,
        width: '100%',
        borderRadius: 19,
        fontSize: 14,
        fontFamily: 'System',
        fontWeight: '600',
        backgroundColor: '#fef7ed',
        lineHeight: 21,
        overflow: 'hidden',
        textAlignVertical: 'top',
        color: '#343434',
    },
    limitText: {
        fontSize: 12,
        fontFamily: 'System',
        fontWeight: '600',
        color: '#fff',
    },
    remainingTextView: {
        height: 27, alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 7,
        alignItems: 'center',
        backgroundColor: 'rgb(251,176,67)'
    }
});

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(addressPicker);
