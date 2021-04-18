import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../../commonComponent/authView/button'
import {useNavigation} from '@react-navigation/native';
import Constant from "../../../../helpers/constant";
import ButtonNew from "../../../../helpers/button";
import {strLocale} from "locale";

const intro = () => {
    const navigation = useNavigation();

    const {slogan, container} = styles;

    const onGetStart = () => {
        navigation.navigate("login")
    }

    return (
        <View style={container}>
            <Text style={slogan}>{strLocale("home.Name")}</Text>
            <View style={{marginTop: 47, marginBottom: 25, width: Constant.screenWidth, alignItems: 'center'}}>
                <ButtonNew
                    title={strLocale("home.GetStart")}
                    onConfirm={onGetStart}
                    isMainStyle={{backgroundColor: '#008763', width: 154, height: 34}}
                    isTextStyle={{color: '#FFFFFF'}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 17
    },
    slogan: {
        fontFamily: 'System',
        fontWeight: '500',
        lineHeight: 31,
        textAlign: 'center',
        fontSize: 20,
        color: '#010522',
        marginTop: 38
    },
})

export default intro;
