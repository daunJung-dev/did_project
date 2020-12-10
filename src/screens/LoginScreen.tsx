import { RouteProp } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSetRecoilState } from 'recoil';
import { authState } from '../recoil';
const styles = StyleSheet.create({
 container: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: 14,
  backgroundColor: '#076490'
 },
 logo: {
  fontWeight: "bold",
  fontSize: 50,
  color: "#fb5b5a",
  marginBottom: 40
 },
 inputBox: {
  width: "80%",
  paddingBottom: 10,
  paddingTop: 10
 },
 input: {
  backgroundColor: '#6987b5',
  height: 60,
  padding: 10,
  fontSize: 14,
  borderRadius: 30,
 },
 forgot: {
  color: "white",
  fontSize: 11
 },
 loginBtn: {
  width: "80%",
  backgroundColor: "#fb5b5a",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  marginBottom: 10
 },
 loginText: {
  height: 50,
  color: "white"
 }

});

const LoginScreen = ({ navigation, route }: { navigation: any, route: RouteProp<any, any> }) => {
 const { control, handleSubmit, errors } = useForm();
 const setLoggedIn = useSetRecoilState(authState);
 const onSubmit = (data: any) => console.log(data);
 const [hidePassword, setHidePassword] = useState<boolean>(true);

 const logIn = useCallback((): void => {
  setLoggedIn({ logged: true })
 }, [])
 return (
  <View style={styles.container}>
   <Text style={styles.logo}>MY DID</Text>
   <Controller
    control={control}
    render={({ onChange, onBlur, value }) => (
     <View style={styles.inputBox}>
      <TextInput
       style={styles.input}
       placeholderTextColor={"#076490"}
       onBlur={onBlur}
       onChangeText={(v: string): void => onChange(v)}
       value={value}
       placeholder={"username"}
      />
     </View>
    )}
    name="username"
    rules={{ required: true }}
    defaultValue=""
   />
   {errors.username && <Text>This is required.</Text>}

   <Controller
    control={control}
    render={({ onChange, onBlur, value }) => (
     <View style={styles.inputBox}>
      <TextInput
       style={styles.input}
       placeholderTextColor={"#076490"}
       secureTextEntry={hidePassword ? true : false}
       onBlur={onBlur}
       onChangeText={v => onChange(v)}
       value={value}
       placeholder={"password"}
      />
     </View>
    )}
    name="password"
    defaultValue=""
   />
   <TouchableOpacity>
    <Text style={styles.forgot}>Forgot Password?</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(logIn)}>
    <Text style={styles.loginText}>LOGIN</Text>
   </TouchableOpacity>
   <TouchableOpacity>
    <Text style={styles.loginText}>Signup</Text>
   </TouchableOpacity>
   <Button
    onPress={() => navigation.navigate('MyModal')}
    title="Open Modal"
   />
  </View>
 )
}

export default LoginScreen


