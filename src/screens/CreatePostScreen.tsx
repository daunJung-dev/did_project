import React, { useState } from 'react'
import { Button, TextInput } from 'react-native'

const CreatePostScreen = ({ navigation, route }: { navigation: any, route: any }) => {
 const [postText, setPostText] = useState('');
 return (
  <>
   <TextInput
    multiline
    placeholder="What's on your mind?"
    style={{ height: 200, padding: 10, backgroundColor: "white" }}
    value={postText}
    onChangeText={setPostText}
   />
   <Button
    title="Done"
    onPress={() => navigation.navigate('Home', { post: postText })}
   />
  </>
 )
}

export default CreatePostScreen
