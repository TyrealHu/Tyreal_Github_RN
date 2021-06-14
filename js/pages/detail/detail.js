import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default class Detail extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>detail</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
