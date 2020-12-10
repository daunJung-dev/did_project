import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet } from 'react-native'
import { ModalScreen } from '../screens';
import { authRoutes } from './routes/authRoutes';
const Stack = createStackNavigator();
const AuthNaigation = () => {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    {authRoutes.map((route, idx) => (
     <Stack.Screen
      key={route.pathname}
      {...route}
      name={route.pathname}
      component={route.screen}
      initialParams={route.initialParams}
     />
    ))}
    <Stack.Screen name="MyModal" component={ModalScreen} />
   </Stack.Navigator>
  </NavigationContainer>
 )
}

export default AuthNaigation

const styles = StyleSheet.create({})
