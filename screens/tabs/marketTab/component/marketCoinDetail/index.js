import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import NavBar from "../../../../commonComponent/navBar/navBar";
import Constant from "../../../../../helpers/constant";
import {useNavigation, useRoute} from "@react-navigation/native";
import MarketCoinDetailTab from "./tabs/marketCoinDetailTab";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import {strLocale} from "locale";
import {AddOrRemoveFavoriteProduct} from "../../../../../actions/homeActions";

const marketCoinDetail = (props) => {
    const navigation = useNavigation();
    const { params } = useRoute();
    // alert(JSON.stringify(params.data))

    const [heighRate, setHeighRate] = useState('10,245.18');
    const [lowRate, setLowRate] = useState('10,098.05');
    const [volRate, setVolRate] = useState('72,512');
    const [selectedType, setSelectedType] = useState('1h');
    const data1H = {
        labels: ["January", "February", "March", "April", "May", "June", "May", "June"],
        datasets: [
            {
                data: [0, 75, 70, 73, 78, 85, 90, 85, 83, 80, 75, 78, 85],
                color: (opacity = 1) => `rgba(253, 112, 40, ${0.2})`, // optional
                strokeWidth: 2 // optional
            }
        ],
    };
    const data24H = {
        labels: ["January", "February", "March", "April", "May", "June", "May", "June"],
        datasets: [
            {
                data: [80, 83, 90, 92, 95, 100, 90, 95, 80, 75, 78, 85],
                color: (opacity = 1) => `rgba(253, 112, 40, ${0.2})`, // optional
                strokeWidth: 2 // optional
            }
        ],
    };



    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onPressRight = () => {
        props.AddOrRemoveFavoriteProduct(params.data.id)
    }

    const renderHeader = () => {
        return (
            <View style={{flexDirection: 'row', marginLeft: 24, marginRight: 18, marginTop: 5}}>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={[prirceText]}>{"10,136.73"}</Text>
                        <Image resizeMode="contain" style={{height: 4, width: 8, marginLeft: 6}}
                               source={{uri: 'icon_up'}}/>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 11}}>
                        <View style={{borderRadius: 4, backgroundColor: '#78D3B7'}}>
                            <Text style={[diffirenteText]}>{"+4,72%"}</Text>
                        </View>
                        <View style={{flex: 1}}/>
                    </View>
                </View>
                <View style={{flex: 1}}/>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View>
                        <Text style={[smallText, {marginBottom: 9}]}>{`${selectedType} High`}</Text>
                        <Text style={[smallText, {marginBottom: 9}]}>{`${selectedType} Low`}</Text>
                        <Text style={[smallText, {marginBottom: 9}]}>{`${selectedType} Vol`}</Text>
                    </View>
                    <View style={{marginLeft: 29}}>
                        <Text style={[smallText, {marginBottom: 9}]}>{heighRate}</Text>
                        <Text style={[smallText, {marginBottom: 9}]}>{lowRate}</Text>
                        <Text style={[smallText, {marginBottom: 9}]}>{volRate}</Text>
                    </View>

                </View>
            </View>
        )
    }

    const renderTabGraph = () => {
        let totalTab = 4;
        let tabWidth = (Constant.screenWidth - 40 - ((totalTab - 1) * 20)) / totalTab;

        return (
            <View style={{marginHorizontal: 20}}>
                <View style={{
                    width: Constant.screenWidth, height: 1, opacity: 0.25, marginLeft: -20, marginTop: 16
                }}/>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <TouchableOpacity onPress={() => setSelectedType("1h")} style={{
                        width: tabWidth,
                        borderRadius: 3,
                        borderColor: selectedType === '1h' && '#E2E2E2' || Constant.transparent,
                        borderWidth: 1,
                    }}>
                        <Text style={[graphText]}>{strLocale("market.1Hour")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedType("24h")} style={{
                        width: tabWidth,
                        borderRadius: 3,
                        borderColor: selectedType === '24h' && '#E2E2E2' || Constant.transparent,
                        borderWidth: 1,
                        marginLeft: 20
                    }}>
                        <Text style={[graphText]}>{strLocale("market.24Hour")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedType("7d")} style={{
                        width: tabWidth,
                        borderRadius: 3,
                        borderColor: selectedType === '7d' && '#E2E2E2' || Constant.transparent,
                        borderWidth: 1,
                        marginLeft: 20
                    }}>
                        <Text style={[graphText]}>{strLocale("market.7 Days")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedType("30d")} style={{
                        width: tabWidth,
                        borderRadius: 3,
                        borderColor: selectedType === '30d' && '#E2E2E2' || Constant.transparent,
                        borderWidth: 1,
                        marginLeft: 20
                    }}>
                        <Text style={[graphText]}>{strLocale("market.30Days")}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: '100%', height: 250, backgroundColor: '#FFF', marginLeft: -60}}>
                    <LineChart
                        data={selectedType === '24h' && data1H || data24H}
                        width={Constant.screenWidth + 100}
                        height={220}
                        hideLegend={true}
                        withHorizontalLabels={false}
                        withVerticalLabels={false}
                        chartConfig={{
                            withShadow: false,
                            withOuterLines: false,
                            backgroundColor: '#fff',
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientToOpacity: 0,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(253, 112, 40, 0.15)`,
                            style: {
                                borderRadius: 16
                            },
                            propsForBackgroundLines:{
                                stroke:"#ffffff"
                            },
                            propsForDots: {
                                r: "0",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                    />
                </View>

            </View>
        )
    }

    const renderBottom = () => {
        return (
            <View style={{
                flexDirection: 'row',
                width: '100%',
                marginHorizontal: 20,
                marginBottom: props.safeAreaInsetsData.bottom + 10,
            }}>
                <TouchableOpacity
                    style={{width: (Constant.screenWidth - 51) / 2, backgroundColor: '#4CCD9E', borderRadius: 4}}>
                    <Text style={[titleText]}>{strLocale("market.BUY")}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: (Constant.screenWidth - 51) / 2,
                    backgroundColor: '#F26C80',
                    borderRadius: 4,
                    marginLeft: 11
                }}>
                    <Text style={[titleText]}>{strLocale("market.SELL")}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const {
        container,
        titleText,
        prirceText,
        diffirenteText,
        smallText,
        graphText
    } = styles;

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={""}
                    backScreenName={strLocale("market.BackName")}
                    rightImage={"icon_favorite"}
                    rightImage2={"icon_shareui"}
                    onPressBack={onPressBack}
                    bgColor={"#FFF"}
                    onPressRight={onPressRight}/>

            <View style={[container]}>
                {renderHeader()}
                {renderTabGraph()}
                <MarketCoinDetailTab/>
            </View>

            {renderBottom()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    titleText: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 19
    },
    prirceText: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 26,
        color: '#00C087',
        textAlign: 'center',
    },
    diffirenteText: {
        fontFamily: 'System',
        fontWeight: '800',
        fontSize: 10,
        lineHeight: 12,
        color: '#FFF',
        marginVertical: 6,
        marginHorizontal: 5
    },
    smallText: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color: '#010522',
        textAlign: 'right',
    },
    graphText: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000',
        textAlign: 'center',
        marginVertical: 7
    },
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {
    AddOrRemoveFavoriteProduct
})(marketCoinDetail);
