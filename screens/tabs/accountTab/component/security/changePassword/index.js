import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Keyboard } from "react-native";
import NavBar from "../../../../../commonComponent/navBar/navBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import FloatingLabel from "../../../../../../helpers/floatingLabel";
import Animated from "react-native-reanimated";
import Constant from "../../../../../../helpers/constant";
import ButtonNew from "../../../../../../helpers/button";
import { connect } from "react-redux";
import { changePassword } from "../../../../../../actions/userActions";
import { showThemeAlert } from "../../../../../../helpers/appHelper";
import {strLocale} from "locale";

const index = (props) => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [isLoading, setIsLoading] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setpasswordAgain] = useState("");

  const [currentPasswordIsShow, setCurrentPasswordIsShow] = useState(true);
  const [passwordIsShow, setPasswordIsShow] = useState(true);
  const [passwordAgainIsShow, setpasswordAgainIsShow] = useState(true);

  const setIsLoadingMethod = (flag) => {
    setIsLoading(flag);
  };
  const { container, floatingView, textBoxView, outerTextView, labelStyle, inputStyle } = styles;

  const apiCall = () => {

    if (!isLoading) {
      setIsLoadingMethod(true);
      // alert(params.old_password)
      props.changePassword(currentPassword, password)
        .then((res) => {
          setIsLoadingMethod(false);
          navigation.navigate("Account");
        })
        .catch((err) => {
          setIsLoadingMethod(false);

          if (err.Heading && (err.status === 401 || err.status === 402)) {
            showThemeAlert({
              title: err.Heading.toString(),
              message: err.Description.toString(),
              leftBtn: "Try again",
            });
          } else {
            showThemeAlert({
              title: Constant.appName,
              message: strLocale("security.ChangePasswordMsg"),
              leftBtn: strLocale("security.Try again"),
            });
          }
        });
    }
  };

  const onPressBack = (id) => {
    navigation.goBack();
  };

  const onEyePress = (id) => {
    switch (id) {
      case 0:
        setCurrentPasswordIsShow(!currentPasswordIsShow);
        break;
      case 1:
        setPasswordIsShow(!passwordIsShow);
        break;
      case 2:
        setpasswordAgainIsShow(!passwordAgainIsShow);
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    if (currentPassword.length === 0) {
      alert(strLocale("security.CurrentPasswordDescription"));
    } else if (password.length === 0) {
      alert(strLocale("security.EnterPasswordDescription"));
    } else if (passwordAgain.length === 0) {
      alert(strLocale("security.EnterPasswordAgain"));
    } else if (password !== passwordAgain) {
      alert(strLocale("security.PasswordMatch"));
    } else {
      apiCall();
      Keyboard.dismiss();
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <NavBar title={strLocale("security.Change Password")}
              backScreenName={strLocale("security.Security")}
              onPressBack={onPressBack} />

      <ScrollView
        style={[container]}
        bounces={false}
      >
        <View style={[{ left: 0, right: 0, top: 0, bottom: 0, alignItems: "center" }]}>
          <View style={outerTextView}>

            <View style={textBoxView}>
              <FloatingLabel
                labelStyle={labelStyle}
                inputStyle={[inputStyle, { fontFamily: "System" }]}
                style={floatingView}
                value={currentPassword}
                autoCapitalize="none"
                secureTextEntry={currentPasswordIsShow}
                autoCorrect={false}
                returnKeyType={"next"}
                maxLength={128}
                multiline={false}
                keyboardAppearance={"light"}
                onChangeText={(text) => {
                  setCurrentPassword(text);
                }}
                // onSubmitEditing={() => this.focusNextField('input2','txtPassword')}
                selectionColor={"black"}>
                {strLocale("security.Current Password")}
              </FloatingLabel>
              <TouchableOpacity onPress={() => onEyePress(0)} style={{
                position: "absolute", right: 20,
                width: 18, height: 18,
              }}>
                <Image resizeMode="contain"
                       source={{ uri: currentPasswordIsShow && "icon_hiddeneye" || "icon_openeye" }}
                       style={{ width: 18, height: 18 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.outerTextView, { marginTop: 16 }]}>
            <View style={textBoxView}>
              <FloatingLabel
                labelStyle={labelStyle}
                inputStyle={[inputStyle, { fontFamily: "System" }]}
                style={floatingView}
                value={password}
                secureTextEntry={passwordIsShow}
                returnKeyType={"done"}
                blurOnSubmit={true}
                keyboardAppearance={"light"}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={128}
                multiline={false}
                selectionColor={"black"}>
                {strLocale("security.Password")}
              </FloatingLabel>
              <TouchableOpacity onPress={() => onEyePress(1)} style={{
                position: "absolute", right: 20,
                width: 18, height: 18,
              }}>
                <Image resizeMode="contain" source={{ uri: passwordIsShow && "icon_hiddeneye" || "icon_openeye" }}
                       style={{ width: 18, height: 18 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.outerTextView, { marginTop: 16 }]}>
            <View style={textBoxView}>
              <FloatingLabel
                labelStyle={labelStyle}
                inputStyle={[inputStyle, { fontFamily: "System" }]}
                style={floatingView}
                value={passwordAgain}
                secureTextEntry={passwordAgainIsShow}
                returnKeyType={"done"}
                blurOnSubmit={true}
                keyboardAppearance={"light"}
                onChangeText={(text) => {
                  setpasswordAgain(text);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={128}
                multiline={false}
                selectionColor={"black"}>
                {strLocale("security.Password Again")}
              </FloatingLabel>
              <TouchableOpacity onPress={() => onEyePress(2)} style={{
                position: "absolute", right: 20,
                width: 18, height: 18,
              }}>
                <Image resizeMode="contain" source={{ uri: passwordAgainIsShow && "icon_hiddeneye" || "icon_openeye" }}
                       style={{ width: 18, height: 18 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 50, width: Constant.screenWidth }}>
          <ButtonNew
            title={strLocale("Confirm")}
            isActivityIndicator={isLoading}
            onConfirm={onConfirm} />
        </View>
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
  textBoxView: {
    justifyContent: "center", flex: 1, marginLeft: 5, borderRadius: 4,
    borderWidth: 1, borderColor: "#0073F7", height: 58,
  },
  floatingView: {
    paddingBottom: 0,
  },
  textBorder: {
    backgroundColor: "#e3e8ec",
    height: 1,
    alignSelf: "center",
    marginLeft: 36,
    marginTop: 3.5,
    width: Constant.screenWidth - 84,
  },
  outerTextView: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 57,
  },
  labelStyle: {
    fontFamily: "System",
    fontWeight: "normal",
    color: "#0073F7",
    marginTop: 1,
  },
  inputStyle: {
    borderWidth: 0,
    color: "#000000",
    fontSize: 16,
    height: 48,
    fontFamily: "System",
    fontWeight: "normal",
    marginRight: 30,
  },
});

const mapStateToProps = state => {
  return {
    safeAreaInsetsData: state.user.safeAreaInsetsDefault,
  };
};

export default connect(mapStateToProps, {
  changePassword,
})(index);


