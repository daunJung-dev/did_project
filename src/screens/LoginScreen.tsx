import { RouteProp } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useSetRecoilState } from 'recoil';
import { authState } from '../recoil';
const styles = StyleSheet.create({
 container: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: 14,
 },
 inputBox: {
  padding: 8,
 },
 input: {
  borderColor: "#dfdfdf",
  borderWidth: 3,
  width: "30%",
  minWidth: 260,
  height: 40,
  padding: 8,
  fontSize: 14,
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
   <Controller
    control={control}
    render={({ onChange, onBlur, value }) => (
     <View style={styles.inputBox}>
      <TextInput
       style={styles.input}
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
     <TextInput
      style={styles.input}
      secureTextEntry={hidePassword ? true : false}
      onBlur={onBlur}
      onChangeText={v => onChange(v)}
      value={value}
      placeholder={"password"}
     />
    )}
    name="password"
    defaultValue=""
   />
   <Button title="로그인" onPress={handleSubmit(logIn)} />
  </View>
 )
}

export default LoginScreen


