import * as React from 'react';
import {View} from 'react-native';
import PopularContainer  from "../../navigator/popular-navigators";
import { StyleSheet } from "react-native";

export default class Popular extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <PopularContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
});
