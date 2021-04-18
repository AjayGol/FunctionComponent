import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import NavBar from "../../../../../commonComponent/navBar/navBar";
import { useNavigation } from "@react-navigation/native";
import AddressComponents from "./component/addressComponents";
import { strLocale } from "locale";


const addressManagement = (props) => {
  const navigation = useNavigation();

  const { container } = styles;
  const listData = [
    {
      id: 1,
      title: strLocale("security.addressManagement"),
      description: strLocale("security.BTC"),
      address: strLocale("security.address"),
    },
    {
      id: 1,
      title: strLocale("security.addressManagement 2"),
      description: strLocale("security.BTC"),
      address: strLocale("security.address"),
    },
    {
      id: 1,
      title: strLocale("security.addressManagement 3"),
      description: strLocale("security.BTC"),
      address: strLocale("security.address"),
    },
  ];

  const [arrList, setArrList] = useState(listData);

  const onPressBack = (id) => {
    navigation.goBack();
  };

  const onPressButton = () => {

  };

  const onCancelButton = () => {

  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <NavBar title={strLocale("security.Address Book")}
              backScreenName={strLocale("security.Security")}
              onPressBack={onPressBack} />
      <ScrollView
        style={[container]}
      >
        <View style={{ width: "100%", height: 16 }} />
        {
          arrList.map((objData, index) => {
            let headerTitle = Object.keys(objData);
            return (
              <AddressComponents
                id={objData.id || ""}
                title={objData.title || ""}
                description={objData.description || ""}
                address={objData.address || ""}
                onPressButton={onPressButton}
                onCancelButton={onCancelButton} />
            );
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    width: "100%",
    flex: 1,
  },
});

export default addressManagement;
