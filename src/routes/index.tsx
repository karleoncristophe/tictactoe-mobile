import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeProvider} from 'styled-components';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarShowLabel: false,
        //   tabBarActiveTintColor: theme.colors.primary,
        //   tabBarInactiveTintColor: theme.colors.disabled,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ focused, color, size }: any) => (
          //   <Icon type="Feather" name="home" size={ICON_SIZE} color={color} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}
function Routes() {
  return (
    // <ThemeProvider theme={theme}>

    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    // </ThemeProvider>
  );
}

export default Routes;
