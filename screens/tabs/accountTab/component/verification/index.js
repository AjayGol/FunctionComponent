import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import NavBar from "../../../../commonComponent/navBar/navBar";
import {useNavigation} from "@react-navigation/native";
import Constant from "../../../../../helpers/constant";
import VerificationRow from "./component/verificationRow"
import {strLocale} from "locale";


const Verification = (props) => {
    const navigation = useNavigation();
    const {container, title, description} = styles;

    const listData = [
        {id: 1, title: strLocale("verification.STEP 1"), description: strLocale("verification.Mobile Phone Verification"), Icon: 'icon_doneright'},
        {id: 2, title: strLocale("verification.STEP 2"), description: strLocale("verification.Basic Informations"), Icon: 'icon_remianing'},
        {id: 3, title: strLocale("verification.STEP 3"), description: strLocale("verification.ID & Face Verifications"), Icon: 'icon_remianing'},
    ];

    const [arrList, setArrList] = useState(listData);

    const onPressBack = (id) => {
        navigation.goBack()
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={strLocale("verification.Verification")}
                    backScreenName={ strLocale("verification.Accounts")}
                    onPressBack={onPressBack}/>

            <ScrollView>
                <View style={container}>
                    <Text style={title}>{strLocale("verification.Personal Verifications")}</Text>
                    <Text style={description}>{strLocale("verification.Deposit/Withdraw and Trade with TL pairs.")}</Text>
                </View>

                {
                    arrList.map((objData, index) => {
                        let headerTitle = Object.keys(objData);
                        return (
                            <VerificationRow
                                id={objData.id || ''}
                                title={objData.title || ''}
                                description={objData.description || ''}
                                icondoneright={objData.Icon || ''}
                                keyValue={index}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: -9
    },
    title: {
        marginTop: 28,
        fontWeight: '600',
        fontSize: 16,
        color: '#000000',
        lineHeight: 31,
        paddingHorizontal: 28,

    },
    description: {
        marginTop: 19,
        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
        lineHeight: 31,
        paddingHorizontal: 19,
    },

})

export default Verification;
