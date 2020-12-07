import React from 'react'
import { View } from 'react-native';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/state';

export function TodoItem({ item }: { item: any }) {
 const [todoList, setTodoList] = useRecoilState<any[]>(todoListState);
 const index = todoList.findIndex((listItem) => listItem === item);

 const editItemText = ({ target: { value } }: { target: { value: any } }) => {
  const newList = replaceItemAtIndex(todoList, index, {
   ...item,
   text: value,
  });

  setTodoList(newList);
 };

 const toggleItemCompletion = () => {
  const newList = replaceItemAtIndex(todoList, index, {
   ...item,
   isComplete: !item.isComplete,
  });

  setTodoList(newList);
 };

 const deleteItem = () => {
  const newList = removeItemAtIndex(todoList, index);

  setTodoList(newList);
 };

 return (
  <View>
   <input type="text" value={item.text} onChange={editItemText} />
   <input
    type="checkbox"
    checked={item.isComplete}
    onChange={toggleItemCompletion}
   />
   <button onClick={deleteItem}>X</button>
  </View>
 );
}

function replaceItemAtIndex(arr: any[], index: number, newValue: any) {
 return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: any[], index: number) {
 return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;