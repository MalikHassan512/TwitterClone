import { View, Text, StyleSheet, Image, TextInput, Pressable, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { Link, useRouter } from 'expo-router'

const user =  {
  id: 'u1',
  username: 'VadimNotJustDev',
  name: 'Vadim',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
}

const NewTweet = () => {
  const [text, setText] = useState('')
  const router = useRouter()

  const onPressTweet = () => {
    console.warn('tweeted')
    setText('')
    router.back()
  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
      <Link href='../' style={styles.cancelBtn}>
      Cancel</Link>

      <Pressable onPress={onPressTweet} style={styles.tweetBtnContainer}>
      <Text style={styles.tweetBtn}>Tweet</Text>
      </Pressable>
      </View>

      <View style={styles.inputContainer}>
      <Image src={user.image} style={styles.image} />
      <TextInput
      value={text}
      onChangeText={setText}
      multiline={true}
      numberOfLines={5}
      style={{flex: 1, marginLeft: 10}}
      placeholder={"What's happening?"}
      />
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1, 
  },

  image: {
    width: 50,
    borderRadius: 50,
    aspectRatio: 1,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems:'center',
  marginVertical:10,
},
  cancelBtn: {fontSize:20},
  tweetBtn: {fontSize:20,
     color:'white', fontWeight:'bold',},
   tweetBtnContainer:{
    backgroundColor: '#1C9BF0',
    padding:5,
    paddingHorizontal:20,
    borderRadius:30,
   }
})

export default NewTweet