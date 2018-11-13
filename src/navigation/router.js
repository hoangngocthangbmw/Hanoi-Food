import { createSwitchNavigator, createStackNavigator, createTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/login_screens/LoginScreen';
import SplashScreen from '../screens/splash_screens/SplashScreen';
import Test1Screen from '../screens/test1_screens/Test1Screen';
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
    Test1: { screen: Test1Screen },
    Test2: { screen: Test2Screen },
}, {
        navigationOptions: () => ({
            header: null
        })
    });


const AppStack = createSwitchNavigator({
    SplahStack: { screen: SplashScreen},
    LoginStack,
    TabStack
});

export default AppStack;