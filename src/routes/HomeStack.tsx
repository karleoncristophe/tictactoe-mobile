import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HOMESTACK from './constants/HOMESTACK';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      {HOMESTACK.map(route => (
        <Stack.Screen
          key={route.id}
          name={route.name}
          component={route.component}
          options={{header: () => null}}
        />
      ))}
    </Stack.Navigator>
  );
}

export default HomeStack;
