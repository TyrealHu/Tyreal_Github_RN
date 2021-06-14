import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../../navigator/navigation-util";

export default class Welcome extends React.Component{

    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHome(this.props);
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
