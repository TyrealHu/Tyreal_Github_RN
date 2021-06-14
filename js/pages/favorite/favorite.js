import * as React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

export default class Favorite extends React.Component{
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>favorite</Text>
                <Button
                    title={'改变颜色'}
                    onPress={() => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'orange',
                                updateTime: new Date().getTime(),
                            }
                        })
                    }}
                />
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
