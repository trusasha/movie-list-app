import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import {INavigationStack} from './types';

const Stack = createNativeStackNavigator<INavigationStack>();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{title: 'ALL MOVIES'}} />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={({
        route: {
          params: {title},
        },
      }) => ({title: title.toUpperCase()})}
    />
  </Stack.Navigator>
);

export default MainStack;
