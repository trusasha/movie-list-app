import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import { INavigationStack } from './types';
import { screens } from './constants';

const Stack = createNativeStackNavigator<INavigationStack>();

const MainStack = () => (
  <Stack.Navigator initialRouteName={screens.home}>
    <Stack.Screen name={screens.home} component={HomeScreen} options={{ title: 'ALL MOVIES' }} />
    <Stack.Screen
      name={screens.details}
      component={DetailsScreen}
      options={({
        route: {
          params: { title },
        },
      }) => ({ title: title.toUpperCase() })}
    />
  </Stack.Navigator>
);

export default MainStack;
