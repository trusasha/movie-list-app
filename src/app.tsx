import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainStack from './navigation/main';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </QueryClientProvider>
);

export default App;
