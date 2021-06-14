export default class NavigationUtil {

    /**
     * 跳转到Home页面
     * @param params
     */
    static resetToHome(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }
}
