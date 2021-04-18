import React, {Component, useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    BackHandler,
} from 'react-native';
import {connect} from 'react-redux';
import {strLocale} from "locale";
import * as RNLocalize from "react-native-localize";
import {cloneDeep, find, findIndex} from "lodash";
import RNRestart from 'react-native-restart';
import Animated, {Easing} from "react-native-reanimated";
import Constant from "../../../../../helpers/constant";
import { showThemeAlert} from "../../../../../helpers/appHelper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar from "../../../../commonComponent/navBar/navBar";
import RoutingComponents from "../routingComponents";



class LanguageSetting extends Component {

    constructor(props) {
        super(props);
        const {languageTag} = RNLocalize.findBestAvailableLanguage(Constant.appLocalization) || {languageTag: 'en'};

        let languages = [
            {title: strLocale("language.English"), dbValue: "en", isRTL: false},
            {title: strLocale("language.Русский"), dbValue: "ru", isRTL: false},
            {title: strLocale("language.Română"), dbValue: "ro", isRTL: false},
            {title: strLocale("language.Türkçe"), dbValue: "tr", isRTL: false},
            {title: strLocale("language.中文"), dbValue: "zh", isRTL: false}, //Chinese =
        ];
        const defaultLanguage = find(languages, {dbValue: languageTag});
        const defaultLanguageIndex = findIndex(languages, defaultLanguage);
        languages.splice(defaultLanguageIndex, 1);
        defaultLanguage.title += " (" + "default" + ")";
        languages.unshift(defaultLanguage);
        this.state = {
            languages,
            selectedValue: defaultLanguage.dbValue,
            scrollY: new Animated.Value(0),
        };
    }

    UNSAFE_componentWillMount() {
        AsyncStorage.getItem("appLanguage").then((appLanguage) => {
            if (appLanguage) {
                let selectedLanguage = JSON.parse(appLanguage)
                this.setState({
                    selectedValue: selectedLanguage.dbValue
                })
            }
        });
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.onBackButtonPress();
        return true;
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    onBackButtonPress = () => {
        this.props.navigation.goBack();
    };

    onSelectOption = (type, selectedValue) => {
        if (selectedValue !== this.state.selectedValue) {
            let current = this.state.selectedValue;
            this.setState({
                selectedValue
            });
            showThemeAlert({
                title: `${Constant.appName} ${strLocale("language.DescriptionLanguage")}`,
                leftBtn: strLocale("Cancel"),
                leftPress: () => {
                    this.setState({
                        selectedValue: current
                    });
                },
                rightBtn: strLocale("Restart"),
                rightPress: (i) => {
                    const seletedLanguage = find(this.state.languages, {dbValue: selectedValue});
                    this.setState({
                        selectedValue
                    });
                    AsyncStorage.setItem("appLanguage", JSON.stringify(seletedLanguage)).then(res => {
                        RNRestart.Restart();
                    });
                }
            });
        }
    };

    onPressButton = () => {

    }

    render() {
        const {languages, selectedValue} = this.state

        return (
            <View style={{flex: 1}}>

                <NavBar title={strLocale("language.Language")} onPressBack={this.onBackButtonPress}/>

                <ScrollView
                    style={[styles.container]}
                    bounces={false}
                >
                    {
                        languages.map((data, index) => {
                            return (
                                <RoutingComponents
                                    id={data.id || ''}
                                    title={data.title || ''}
                                    rightText={data.description || ''}
                                    iconLeft={data.iconLeft || ''}
                                    iconRight={selectedValue === data.dbValue && "icon_right" || ''}
                                    iconRightIcon={selectedValue === data.dbValue && "icon_right" || ''}
                                    imgPro={{width: 18, height: 13}}
                                    isBottomLine={data.isBottomLine}
                                    textColor={data.textColor}
                                    data={data.dbValue}
                                    onPressButton={this.onSelectOption}
                                    keyValue={index}/>
                            )
                        })
                    }
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textView: {
        marginTop: 10,
        padding: 10,
        fontSize: 15,
        color: '#000',
        minHeight: 100,
        fontFamily: 'System',
        fontWeight: '400',
    },
    container: {
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        width: '100%',
        flex: 1,
    },
});

const mapStateToProps = state => {
    return {
        safeAreaInsetsDefault: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(LanguageSetting);

