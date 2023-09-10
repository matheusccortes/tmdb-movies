import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {LoginScreen} from '../screens/LoginScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
    </RootStack.Navigator>
  );
}
