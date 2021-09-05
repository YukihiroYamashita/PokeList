import React from 'react';

import { NavigationContainer, CompositeScreenProps  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

import { RootStackParamList } from './RootStackParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;