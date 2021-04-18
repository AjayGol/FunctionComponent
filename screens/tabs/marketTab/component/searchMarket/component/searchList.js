import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WalletRow from "../../../../walletTab/subComponent/walletRow";
import MarketSearchRow from '../subComponent/marketSearchRow'

const walletRow = (props) => {
    const {container} = styles;
    const [smallBalances, setSmallBalances] = useState(true);

    const onHideSmallBalances = () => {
        setSmallBalances(!smallBalances)
    }

    const renderRow = ({item, index}) => {
        return (
            <View>
                <MarketSearchRow
                    data={item}
                    index={index}
                    balanceHideShow={true}
                    isHideRight={true}
                    onCellClick={props.onCellClick}/>
            </View>
        )
    }

    return (
        <View style={container}>
            <FlatList showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps='always'
                      data={props.data}
                      onEndReachedThreshold={0.5}
                      style={{flex: 1}}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={renderRow}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default walletRow;
