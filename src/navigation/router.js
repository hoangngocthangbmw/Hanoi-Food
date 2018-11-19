import { createSwitchNavigator, createStackNavigator, createTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/login_screens/LoginScreen';
import SplashScreen from '../screens/splash_screens/SplashScreen';
import OrderScreen from '../screens/order_screens/OrderScreen';
import Test2Screen from '../screens/test2_screens/Test2Screen';
import PersionalScreen from '../screens/persional_screens/PersionalScreen';
import ExchangeScreen from '../screens/exchange_screens/ExchangeScreen';
import RewardScreen from '../screens/reward_screens/RewardScreen';
import VoucherScreen from '../screens/voucher_screens/VoucherScreen';

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
    // Test2: { screen: Test2Screen },
    Voucher: { screen: VoucherScreen },
    Exchange: { screen: ExchangeScreen },
    Reward: { screen: RewardScreen },
    Persional: { screen: PersionalScreen },
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