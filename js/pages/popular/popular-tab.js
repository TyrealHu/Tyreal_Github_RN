import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default class PopularTab extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {tabLabel} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>
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
