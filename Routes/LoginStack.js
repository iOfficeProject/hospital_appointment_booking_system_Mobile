import { createStackNavigator } from '@react-navigation/stack';
import Register from '../components/Register';
import Login from '../components/Login';
import Home from '../components/Home';
import BottomTab from '../components/BottomTab';

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
export default LoginStack