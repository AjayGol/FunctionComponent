import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import NavBar from "../../../../commonComponent/navBar/navBar";
import {useNavigation, useRoute} from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import {strLocale} from "locale";

const support = (props) => {
    const navigation = useNavigation();
    const {params} = useRoute();

    const [isLoading, setIsLoading] = useState(true);
    const {container} = styles;

    const onPressBack = (id) => {
        navigation.goBack()
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={strLocale("support.Support")}
                    backScreenName={params && params.from || "Home"}
                    onPressBack={onPressBack}/>

            <WebView style={{flex:1, marginTop: 0}}
                     source={{ uri: params.urlLoad || 'https://bitubu.com/en/support-center' }}
                     onLoadStart={syntheticEvent => {
                         setIsLoading(true)
                     }}
                     onLoadEnd={syntheticEvent => {
                         setIsLoading(false)
                     }}/>

            {
                !!isLoading === true &&
                <View style={[{top: 0, bottom: 0, left: 0, right: 0, position: 'absolute', justifyContent: 'center'}]}>
                    <ActivityIndicator
                        animating={true}
                        size="small"
                        color={'black'}/>
                </View>
            }
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

export default support;
