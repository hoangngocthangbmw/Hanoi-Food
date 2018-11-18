import { createSwitchNavigator, createStackNavigator, createTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/login_screens/LoginScreen';
import SplashScreen from '../screens/splash_screens/SplashScreen';
import OrderScreen from '../screens/order_screens/OrderScreen';
import Test2Screen from '../screens/test2_screens/Test2Screen';

const SplashStack = createStackNavigator({
    Splash: { screen: SplashScreen },
}, {
        navigationOptions: () => ({
            header: null
        })
    });

const LoginStack = createStackNavigator({
    Login: { screen: LoginScreen },
}, {
        navigationOptions: () => ({
            header: null
        })
    });

const TabStack = createTabNavigator({
    Order: { screen: OrderScreen },
    Test2: { screen: Test2Screen },
}, {
        navigationOptions: () => ({
            header: null
        })
    });

const AppStack = createSwitchNavigator({
    SplahStack: { screen: SplashScreen },
    LoginStack,
    TabStack
});

export default AppStack;