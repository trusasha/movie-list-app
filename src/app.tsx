import React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';
import { IMovie } from './interfaces';

export interface INavigationStack extends ParamListBase {
  Home: undefined;
  Details: IMovie;
}

const Stack = createNativeStackNavigator<INavigationStack>();

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ALL MOVIES' }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({
            route: {
              params: { title },
            },
          }) => ({ title: title.toUpperCase() })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </QueryClientProvider>
);

export default App;
