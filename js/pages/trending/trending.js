import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Trending extends React.Component{
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>trending</Text>
                <Button
                    title={'改变颜色'}
                    onPress={() => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'blue',
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
