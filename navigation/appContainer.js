import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import InitialComponent from '../screens/initialComponent';

// Homepage, Support Center, Markets, Wallet and Accounts
import HomeScreen from '../screens/appTabBar';
import SupportCenterScreen from '../screens/tabs/homeTab/component/supportCenter';
import ReferralScreen from '../screens/tabs/accountTab/component/referral';

// Accounts
import AccountTab from'../screens/tabs/accountTab';
import VerificationScreen from'../screens/tabs/accountTab/component/verification';
import Security from'../screens/tabs/accountTab/component/security';
import ChangePassword from '../screens/tabs/accountTab/component/security/changePassword';
import SmsAuthentication from '../screens/tabs/accountTab/component/security/smsAuthentication';
import SmsConfirmation from '../screens/tabs/accountTab/component/security/smsAuthentication/smsConfirmation';
import GoogleAuthentication from '../screens/tabs/accountTab/component/security/googleAuthentication';
import AntiPhishing from '../screens/tabs/accountTab/component/security/antiPhishing';
import AddressManagement from '../screens/tabs/accountTab/component/security/addressManagement';
import Language from'../screens/tabs/accountTab/component/language';
import Support from '../screens/tabs/accountTab/component/support';

// Maerket tab
import SearchMarket from '../screens/tabs/marketTab/component/searchMarket';
import MarketCoinDetail from '../screens/tabs/marketTab/component/marketCoinDetail';

// Trade tab
import TrandList from '../screens/tabs/tradeTab/component';

//Wallet
import Deposit from '../screens/tabs/walletTab/component/deposit';
import Withdrawal from '../screens/tabs/walletTab/component/withdrawal';
import TryDeposit from '../screens/tabs/walletTab/component/tryDeposit';
import TryWithdrawal from '../screens/tabs/walletTab/component/tryWithdrawal';
import SearchWallet from '../screens/tabs/walletTab/component/searchWallet';

// Login, Register & Forget Password
import LoginScreen from '../screens/account/login';
import RegisterScreen from '../screens/account/register';
import EmailConfirmation from "../screens/account/register/component/emailConfirmation";
import EmailAddressAuthenticator from "../screens/account/login/component/twoFactoAuthentication";
import ForgotPassword from "../screens/account/login/component/forgotPassword";
import ForgotPasswordConfirmation from "../screens/account/login/component/forgotPasswordConfirmation";
import CreateNewPassword from "../screens/account/login/component/createNewPassword";
// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen name="initialcomponent" options={{stackAnimation: 'none'}} component={InitialComponent}/>
        <Stack.Screen name="homepage" component={HomeScreen} options={{headerShown:false, animationEnabled: false}} />
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="register" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name="supportcenter" component={SupportCenterScreen} options={{headerShown:true}} />
        <Stack.Screen name="referralscreen" component={ReferralScreen} options={{headerShown:false}} />
        <Stack.Screen name="verificationscreen" component={VerificationScreen} options={{headerShown:false}} />
        <Stack.Screen name="security" component={Security} options={{headerShown:false}} />
        <Stack.Screen name="changepassword" component={ChangePassword} options={{headerShown:false}} />
        <Stack.Screen name="smsauthentication" component={SmsAuthentication} options={{headerShown:false}} />
        <Stack.Screen name="smsconfirmation" component={SmsConfirmation} options={{headerShown:false}} />
        <Stack.Screen name="googleauthentication" component={GoogleAuthentication} options={{headerShown:false}} />
        <Stack.Screen name="antiphishing" component={AntiPhishing} options={{headerShown:false}} />
        <Stack.Screen name="addressmanagement" component={AddressManagement} options={{headerShown:false}} />
        <Stack.Screen name="emailaddressauthenticator" component={EmailAddressAuthenticator} options={{headerShown:false}} />
        <Stack.Screen name="emailconfirmation" component={EmailConfirmation} options={{headerShown:false}} />
        <Stack.Screen name="forgotpassword" component={ForgotPassword} options={{headerShown:false}} />
        <Stack.Screen name="forgotpasswordconfirmation" component={ForgotPasswordConfirmation} options={{headerShown:false}} />
        <Stack.Screen name="createnewpassword" component={CreateNewPassword} options={{headerShown:false}} />
        <Stack.Screen name="deposit" component={Deposit} options={{headerShown:false}} />
        <Stack.Screen name="withdrawal" component={Withdrawal} options={{headerShown:false}} />
        <Stack.Screen name="trydeposit" component={TryDeposit} options={{headerShown:false}} />
        <Stack.Screen name="trywithdrawal" component={TryWithdrawal} options={{headerShown:false}} />
        <Stack.Screen name="searchwallet" component={SearchWallet} options={{headerShown:false}} />
        <Stack.Screen name="searchmarket" component={SearchMarket} options={{headerShown:false}} />
        <Stack.Screen name="marketcoindetail" component={MarketCoinDetail} options={{headerShown:false}} />
        <Stack.Screen name="support" component={Support} options={{headerShown:false}} />
        <Stack.Screen name="trandlist" component={TrandList} options={{headerShown:false}} />
        <Stack.Screen name="loginpresent" options={{stackPresentation: 'transparentModal'}} component={LoginPresent}/>
        <Stack.Screen name="accounttab" component={AccountTab} options={{headerShown:false}} />
        <Stack.Screen name="language" component={Language}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export const LoginPresent = () => {
  return (
      <Stack.Navigator
          initialRouteName="loginPresent"
          screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen name="loginPresent" component={LoginScreen}/>
        {/*<Stack.Screen name="register" component={RegisterScreen} options={{headerShown:false}} />*/}
        {/*<Stack.Screen name="emailconfirmation" component={EmailConfirmation} options={{headerShown:false}} />*/}
        {/*<Stack.Screen name="forgetpassword" component={ForgotPassword} options={{headerShown:false}} />*/}
      </Stack.Navigator>
  );
};

export default AppNavigationContainer;
