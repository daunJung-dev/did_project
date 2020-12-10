import React from 'react'
import { Button, Text, View } from "react-native";

export function ModalScreen({ navigation }: { navigation: any }) {
 return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Text style={{ fontSize: 30 }}>This is a modal!</Text>
   <Button onPress={() => navigation.goBack()} title="Dismiss" />
  </View>
 );
}
export default ModalScreen