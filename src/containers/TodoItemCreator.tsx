import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/state';

const TodoItemCreator = () => {
 const [inputValue, setInputValue] = useState<string>('');
 const setTodoList = useSetRecoilState(todoListState);

 const addItem = () => {
  setTodoList((oldTodoList: any[]) => [
   ...oldTodoList,
   {
    id: getId(),
    text: inputValue,
    isComplete: false,
   },
  ]);
  setInputValue('');
 };

 const onChange = (text: string) => {
  setInputValue(text);
 };
 return (
  <View>
   <TextInput value={inputValue} onChangeText={onChange} />
   <Button title="Add" onPress={addItem} />
  </View>
 )
}
// utility for creating unique Id
let id = 0;
function getId() {
 return id++;
}

export default TodoItemCreator
