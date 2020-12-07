import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { useRecoilValue } from 'recoil'
import TodoItem from '../containers/TodoItem'
import TodoItemCreator from '../containers/TodoItemCreator'
import { todoListState } from '../recoil/state'

const TodoListScreen = ({ navigation, route }: { navigation: any, route: RouteProp<any, any> }) => {
 const todoList = useRecoilValue(todoListState);

 return (
  <View>
   <TodoItemCreator />
   {todoList.map((todo: any) => (
    <TodoItem key={todo.id} item={todo} />
   ))}
  </View>
 )
}

export default TodoListScreen
