import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity, TextInput, Keyboard,
} from "react-native";
import NavBar from "../../../../commonComponent/navBar/navBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { connect } from "react-redux";
import Clipboard from "@react-native-community/clipboard";
import SearchList from "./component/searchList";
import { strLocale } from "locale";

const widthdrawal = (props) => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState("0");
  const [arrCoin, setArrCoin] = useState([{
    title: "Bitcoin",
    subTitle: "BTC",
  }, {
    title: "Ethereum",
    subTitle: "BTC",
  }, {
    title: "Litecoin",
    subTitle: "BTC",
  }, {
    title: "NEO",
    subTitle: "BTC",
  }, {
    title: "Dash",
    subTitle: "BTC",
  }, {
    title: "XRP",
    subTitle: "BTC",
  }, {
    title: "UBU",
    subTitle: "BTC",
  }]);
  const [arrFiat, setArrFait] = useState([{
    title: "Ethereum",
    subTitle: "BTC",
  }, {
    title: "Bitcoin",
    subTitle: "BTC",
  }, {
    title: "NEO",
    subTitle: "BTC",
  }]);

  const onPressBack = (id) => {
    navigation.goBack();
  };

  const onCopy = () => {
    Clipboard.setString("MML7G6DQOVAL2MY7VH53O7SWONN4ZNLH");
  };

  const onCancel = () => {
    Keyboard.dismiss();
  };

  const onPressRight = () => {

  };

  const onChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  const onCellClick = (data, index) => {
    if (params.title === "Deposit") {
      if (index !== 0) {
        navigation.navigate("trydeposit");
      } else {
        navigation.navigate("deposit");
      }
    } else if (params.title === "Withdraw") {
      if (index !== 0) {
        navigation.navigate("trywithdrawal");
      } else {
        navigation.navigate("withdrawal");
      }
    }
  };

  const { container, titleText, textDescription } = styles;

  const renderSearch = () => {
    return (
      <View style={{ marginHorizontal: 5, height: 40, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View style={{
            height: "100%", flexDirection: "row", marginRight: 5, backgroundColor: "#F8F8FB",
            alignItems: "center", paddingHorizontal: 18.5, borderRadius: 7,
          }}>
            <Image resizeMode="contain" source={{ uri: "icon_search" }}
                   style={{ width: 16, height: 16, tintColor: "#C9CED6" }} />
            <TextInput style={{ marginHorizontal: 12, height: "100%" }}
                       placeholder={strLocale("wallet.SearchToken")}
                       autoCorrect={false}
                       value={searchText}
                       autoFocus={false}
                       returnKeyType={"next"}
                       onChangeText={(text) => {
                         setSearchText(text);
                       }} />
          </View>
        </View>
        <TouchableOpacity onPress={onCancel} style={{
          height: "100%", width: 69, backgroundColor: "#F8F8FB", alignItems: "center",
          justifyContent: "center", borderRadius: 7,
        }}>
          <Text style={[titleText]}>{strLocale("wallet.Cancel")}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderTab = () => {
    return (
      <View style={{ marginHorizontal: 5, height: 40, flexDirection: "row", marginTop: 14 }}>
        <TouchableOpacity onPress={() => onChangeTab(0)} style={{
          flex: 1, justifyContent: "center",
          backgroundColor: selectedTab === 0 && "#F8F8FB" || "#FFF", borderWidth: 1, borderColor: "#F8F8FB",
        }}>
          <Text style={[titleText, { color: "#010522" }]}>{strLocale("wallet.Coin")}</Text>
        </TouchableOpacity>
        <View style={{ width: 5, height: "100%" }} />
        <TouchableOpacity onPress={() => onChangeTab(1)} style={{
          flex: 1, justifyContent: "center", backgroundColor: selectedTab === 1 && "#F8F8FB" || "#FFF",
          borderWidth: 1, borderColor: "#F8F8FB",
        }}>
          <Text style={[titleText, { color: "#010522" }]}>{strLocale("wallet.Fiat")}</Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <NavBar title={""}
              backScreenName={params.title}
              rightTitle={strLocale("wallet.History")}
              onPressBack={onPressBack}
              bgColor={"#FFF"}
              onPressRight={onPressRight} />

      {renderSearch()}

      {renderTab()}

      <SearchList
        data={selectedTab ? arrCoin : arrFiat}
        balanceHideShow={true}
        onCellClick={onCellClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  textDescription: {
    fontFamily: "System",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 22,
    color: "#000000",
    textAlign: "center",
  },
  titleText: {
    fontFamily: "System",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    color: "#C9CED6",
    textAlign: "center",
  },
});

const mapStateToProps = state => {
  return {
    safeAreaInsetsData: state.user.safeAreaInsetsDefault,
  };
};

export default connect(mapStateToProps, {})(widthdrawal);
