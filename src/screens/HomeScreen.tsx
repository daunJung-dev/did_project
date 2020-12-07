import { RouteProp } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { authState } from '../recoil';

export function HomeScreen({ navigation, route }: { navigation: any, route: RouteProp<any, any> }) {
 useEffect(() => {
  if (route.params?.post) {
   // post updated, do something with 'route.params.post'
   // For example, send the post to the server
  }
 }, [route.params?.post]);
 const setLoggedOut = useSetRecoilState(authState);
 const logOut = useCallback(() => setLoggedOut({ logged: false }), [])
 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Text>Home Screen</Text>
   <Button
    title="Logout"
    onPress={logOut}
   />
   <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
   {/* <Button
    title="Go to Details"
    onPress={() => navigation.navigate('Details', {
     itemId: 86,
     otherParams: "anything you want here",
     isDude: true
    })}
   /> */}
  </View>
 );
}
export default HomeScreen;