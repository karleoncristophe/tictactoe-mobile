import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeProvider} from 'styled-components';
import HomeStack from './HomeStack';
import Icon from '../common/Icon';
import theme from '../theme';

const Tab = createBottomTabNavigator();

const ICON_SIZE = 30;

//For future screens
// function TabNavigation() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         header: () => null,
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: theme.colors.primary,
//         tabBarInactiveTintColor: theme.colors.disabled,
//         tabBarHideOnKeyboard: true,
//         tabBarStyle: {
//           backgroundColor: theme.colors.background,
//           borderTopWidth: 0,
//         },
//       }}>
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({focused, color, size}: any) => (
//             <Icon type="Ionicons" name="home" size={ICON_SIZE} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* <TabNavigation /> */}
        <HomeStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Routes;
