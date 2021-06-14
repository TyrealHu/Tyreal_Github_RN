export default class NavigationUtil {

    /**
     * 跳转到指定页面
     * @param params 要传递的参数
     * @param page 要跳转的目标页面
     */
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null')
        } else {
            navigation.navigate(page, params);
        }
    }

    /**
     * 跳转到Home页面
     * @param params
     */
    static resetToHome(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }
}
