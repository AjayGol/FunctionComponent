import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import NavBar from "../../../../commonComponent/navBar/navBar";
import {useNavigation} from "@react-navigation/native";
import RoutingComponents from "../routingComponents";
import {connect} from "react-redux";
import {strLocale} from "locale";

const security = (props) => {
    const navigation = useNavigation();

    const {container} = styles;
    const listData = [
        {id: 1, title: strLocale("security.Anti-phishing Code"), iconRight: 'arrow-right'},
        {id: 2, title: strLocale("security.Address Management"), iconRight: 'arrow-right'},
        {id: 3, title: strLocale("security.Google Authentication"), description: "Enabled", iconRight: 'arrow-right'},
        {id: 4, title: strLocale("security.SMS Authentication"), description: "Add", iconRight: 'arrow-right'},
        {id: 5, title: strLocale("security.Change Password"), iconRight: 'arrow-right'},
    ];

    const [arrList, setArrList] = useState(listData);

    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onPressButton = (id) => {
        switch (id) {
            case 1:
                navigation.navigate('antiphishing')
                break;
            case 2:
                navigation.navigate('addressmanagement')
                break;
            case 3:
                navigation.navigate('googleauthentication')
                break;
            case 4:
                navigation.navigate('smsauthentication')
                break;
            case 5:
                navigation.navigate('changepassword')
                break;
            default:
                break;
        }
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={strLocale("security.Security")}
                    backScreenName={strLocale("security.Accounts")}
                    onPressBack={onPressBack}/>

            <ScrollView
                style={[container]}
                bounces={false}
            >
                <View style={{width: '100%', height: 16}}/>
                {
                    arrList.map((objData, index) => {
                        let headerTitle = Object.keys(objData);
                        let title = objData.title || '';
                        let description = objData.description || '';

                        if (title === "Google Authentication"){
                            description = props.isGoogleAut;
                        }
                        return (
                            <RoutingComponents
                                id={objData.id || ''}
                                title={title}
                                rightText={description}
                                iconLeft={objData.iconLeft || ''}
                                iconRight={objData.iconRight || ''}
                                isBottomLine={objData.isBottomLine}
                                textColor={objData.textColor}
                                onPressButton={onPressButton}
                                keyValue={index}/>
                        )
                    })
                }
            </ScrollView>
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
})

const mapStateToProps = state => {
    return {
        isGoogleAut: state.user.isGoogleAut || 'Disable'
    };
};

export default connect(mapStateToProps, {})(security);
