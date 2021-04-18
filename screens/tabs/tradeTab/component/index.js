import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { connect } from "react-redux";
import Constant from "../../../../helpers/constant";
import OpenOrderRow from "./../subComponent/openOrderRow";
import TransactionOrderRow from "./../subComponent/transactionOrderRow";
import RewardOrderRow from "./../subComponent/rewardOrderRow";
import NavBar from "../../../commonComponent/navBar/navBar";
import PickerController from "../../../commonComponent/pickerController/pickAddress";
import { useNavigation } from "@react-navigation/native";
import {strLocale} from "locale";


const Tab = createMaterialTopTabNavigator();

let currentPickerValue = "";

const TradeTab = (props) => {
  const navigation = useNavigation();

  const [isFilterTitle, setIsFilterTitle] = useState(strLocale("trade.OpenOrders"));

  const [arrOpenOrder, setArrOpenOrder] = useState([{
    type: "BUY",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "SELL",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "BUY",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "SELL",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "BUY",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "SELL",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "BUY",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "SELL",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }]);

  const [arrOrderHistory, setArrOrderHistory] = useState([{
    type: "BUY",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Done",
  }, {
    type: "SELL",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "BUY",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Done",
  }, {
    type: "SELL",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "BUY",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Done",
  }, {
    type: "SELL",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "BUY",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }, {
    type: "SELL",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.12541253  BTC",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
  }]);

  const [arrTradeHistory, setArrTradeHistory] = useState([{
    type: "Deposit",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.1235",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Done",
    transitionList: "a379f5d1ffb278cb10e216ff75fe4a0dcde22c0b866114d69e822273505093d3",
    fees: 0.154,
  }, {
    type: "Withdraw",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.1235",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Done",
    transitionList: "dsfdsdfsdfsdfsfds",
    fees: 0.154,
  }, {
    type: "Withdraw",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.1235",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Done",
    transitionList: "3434dsfsdfdsfds",
    fees: 0.154,
  }, {
    type: "Withdraw",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.1235",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
    transitionList: "dsfdfdsfdsfdswerwer",
    fees: 0.154,
  }, {
    type: "Withdraw",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.1235",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Done",
    transitionList: "sdfewrewrewdsdsf",
    fees: 0.154,
  }, {
    type: "Deposit",
    title: "BTC/USDT",
    date: "06.06.2020 16:22",
    amount: "0.1235",
    filled: "0.00000000  BTC",
    price: "9790,11  USDT",
    buttonTitle: "Cancel",
    transitionList: "3434dsfdsdf",
    fees: 0.154,
  }]);

  const [arrReward, setArrReward] = useState([{
    title: "UBU",
    date: "",
    amount: "0.1235",
    refnumber: "s****d",
    buttonTitle: "Referral  ",
    fees: 0.154,
  }, {
    title: "UBU",
    date: "",
    amount: "0.1235",
    buttonTitle: "Referral  ",
    fees: 0.154,
  }, {
    title: "UBU",
    date: "",
    amount: "0.1235",
    buttonTitle: "Referral  ",
    fees: 0.154,
  }, {
    title: "UBU",
    date: "",
    amount: "0.1235",
    refnumber: "s****d",
    buttonTitle: "Referral  ",
    fees: 0.154,
  }, {
    title: "UBU",
    date: "",
    amount: "0.1235",
    refnumber: "s****d",
    buttonTitle: "Referral  ",
    fees: 0.154,
  }, {
    title: "UBU",
    date: "",
    amount: "0.1235",
    refnumber: "s****d",
    buttonTitle: "Referral  ",
    fees: 0.154,
  }]);

  const [dataFilterOpenOrders, setDataFilterOpenOrders] = useState([{
    title: "All Pairs",
    data: ["All Pairs", "222"],
  }, {
    title: "Buy & Sell",
    data: ["Buy & Sell", "222"],
  }]);

  const [dataFilterOpenHistory, setDataFilterOpenHistory] = useState([{
    title: "All Pairs",
    data: ["All Pairs", "222"],
  }, {
    title: "Buy & Sell",
    data: ["Buy & Sell", "222"],
  }, {
    title: "Hide Cancelled",
    data: ["Hide Cancelled", "222"],
  }]);

  const [dataFilterTradeHistory, setDataFilterTradeHistory] = useState([{
    title: "All Pairs",
    data: ["All Pairs", "222"],
  }, {
    title: "Deposit & Withdraw",
    data: ["Deposit & Withdraw", "222"],
  }]);

  const [dataFilterReward, setDataFilterReward] = useState([{
    title: "All Pairs",
    data: ["All Pairs", "222"],
  }, {
    title: "Ref & Mining",
    data: ["Ref & Mining", "222"],
  }]);

  const dataList = () => {
    switch (isFilterTitle) {
      case "Open Orders":
        return arrOpenOrder;
      case "Order History":
        return arrOrderHistory;
      case "Trade History":
        return arrOrderHistory;
      case "Transaction":
        return arrTradeHistory;
      case "Reward":
        return arrReward;
      default:
        return [];
    }
  };

  const filterHeaderList = () => {
    switch (isFilterTitle) {
      case "Open Orders":
        return dataFilterOpenOrders;
      case "Order History":
        return dataFilterOpenHistory;
      case "Trade History":
        return dataFilterTradeHistory;
      case "Transaction":
        return dataFilterOpenOrders;
      case "Reward":
        return dataFilterReward;
      default:
        return [];
    }
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const getCategoryPickerReturn = (data) => {
    return [{ label: strLocale("trade.OpenOrders"), value: strLocale("trade.OpenOrders") },
            { label: strLocale("trade.OrderHistory"), value: strLocale("trade.OrderHistory") },
            { label: strLocale("trade.TradeHistory"), value: strLocale("trade.TradeHistory") },
            { label: strLocale("trade.Transaction"), value: strLocale("trade.Transaction") },
            { label: strLocale("trade.Reward"), value: strLocale("trade.Reward") }];
  };

  const onOpenPicker = () => {
    // Set default value when open picker
    currentPickerValue = "";
  };

  const onValueChange = (value, type) => {
    currentPickerValue = value;
    if (Constant.isANDROID) {
      onFilterUpdate(type, value);
    }
  };

  const onFilterUpdate = (type, value) => {
    if (currentPickerValue !== "") {
      setIsFilterTitle(currentPickerValue);
    }
  };

  const renderRow = ({ item, index }) => {

    if (isFilterTitle === "Transaction") {
      return (
        <TransactionOrderRow
          data={item}
        />
      );
    } else if (isFilterTitle === "Reward") {
      return (
        <RewardOrderRow
          data={item}
        />
      );
    } else {
      return (
        <OpenOrderRow
          data={item}
        />
      );
    }
  };

  const renderListBottom = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList showsVerticalScrollIndicator={true}
                  keyboardShouldPersistTaps="always"
                  data={dataList()}
                  onEndReachedThreshold={0.5}
                  style={{ flex: 1 }}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderRow} />
      </View>
    );

  };

  const renderHeader = () => {
    const dataList = filterHeaderList();

    return (
      <View style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Text style={[topHeaderTitle]}>{isFilterTitle}</Text>
          <Image resizeMode="contain"
                 source={{ uri: "icon_bottomarrow" }}
                 style={{ width: 12, height: 8, marginLeft: 5 }} />
          <View style={[pickerView]}>
            <PickerController
              itemsData={getCategoryPickerReturn()}
              type={"filter1"}
              onOpenPicker={onOpenPicker}
              onValueChange={onValueChange}
              onFilterUpdate={onFilterUpdate}
            />
          </View>
        </View>
        <View style={{
          width: Constant.screenWidth, height: 1, backgroundColor: "#F8F8FB", marginTop: 10, marginBottom: 15,
        }} />

        <View style={{ width: "100%", flexDirection: "row" }}>
          {
            dataList.length > 0 &&
            <View style={headerLeft}>
              <Text style={[titleText, { marginRight: 3 }]}>{dataList[0].title}</Text>
              <Image resizeMode="contain" source={{ uri: "icon_arrowdown" }}
                     style={{ width: 8, height: 10 }} />
            </View>
          }
          <View style={[headerMedium, { marginLeft: 26 }]}>
            {
              dataList.length > 1 &&
              <View style={{ flexDirection: "row" }}>
                <Text style={[titleText, { marginRight: 3 }]}>{dataList[1].title}</Text>
                <Image resizeMode="contain" source={{ uri: "icon_arrowdown" }}
                       style={[imgIcon, { marginTop: 2 }]} />
              </View>
            }

            <View style={[pickerView]}>
              {/*<PickerController2*/}
              {/*    itemsData={getCategoryPickerReturn()}*/}
              {/*    type={'filter1'}*/}
              {/*    onOpenPicker={onOpenPicker}*/}
              {/*    onValueChange={onValueChange}*/}
              {/*    onFilterUpdate={onFilterUpdate}*/}
              {/*/>*/}
            </View>
          </View>

          {
            dataList.length > 2 &&
            <View style={[headerRight]}>
              <View style={{ width: 15, height: 15, borderRadius: 7.5, borderWidth: 1, borderColor: "#DDDDDD" }}></View>
              <Text style={[titleText, { marginLeft: 8 }]}>{dataList[2].title}</Text>
              {/*<Image resizeMode="contain" source={{uri: 'icon_arrowdown'}}*/}
              {/*       style={{width: 8, height: 10}}/>*/}
            </View>
          }
        </View>
      </View>
    );
  };

  const renderMainView = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          {renderListBottom()}
        </View>
      </View>
    );
  };

  const { topHeaderTitle, headerLeft, headerMedium, headerRight, titleText, imgIcon, pickerView } = styles;

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>

      <NavBar title={""}
              backScreenName={strLocale("trade.Trade")}
              onPressBack={onPressBack} />

      {renderHeader()}
      {renderMainView()}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  topHeaderTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    lineHeight: 20,
  },
  pickerView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  headerLeft: {
    height: 23,
    marginLeft: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerMedium: {
    height: 23,
    marginRight: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerRight: {
    height: 23,
    marginRight: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "System",
    fontWeight: "400",
    fontSize: 12,
    color: "#010522",
    opacity: 0.4,
  },
  imgIcon: {
    width: 8,
    height: 10,
    marginTop: 0,
  },
});

const mapStateToProps = state => {
  return {
    safeAreaInsetsData: state.user.safeAreaInsetsDefault,
  };
};

export default connect(mapStateToProps, {})(TradeTab);

