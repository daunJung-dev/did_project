import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet } from 'react-native'
import { mainRoutes } from './routes/mainRoutes';
const Stack = createStackNavigator();
const MainNavigation = () => {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    {mainRoutes.map((route, idx) => (
     <Stack.Screen
      key={idx}
      name={route.pathname}
      component={route.screen}
      initialParams={route.initialParams}
     />
    ))}
   </Stack.Navigator>
  </NavigationContainer>
 )
}

export default MainNavigation

const styles = StyleSheet.create({})
