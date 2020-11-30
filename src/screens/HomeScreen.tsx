import { RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export function HomeScreen({ navigation, route }: { navigation: any, route: RouteProp<any, any> }) {
 useEffect(() => {
  if (route.params?.post) {
   // post updated, do something with 'route.params.post'
   // For example, send the post to the server
  }
 }, [route.params?.post])

 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Text>Home Screen</Text>
   <Button
    title="Create post"
    onPress={() => navigation.navigate('CreatePost')}
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