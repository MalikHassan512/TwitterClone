import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TweetType } from '../types'


type TweetProps = {
  tweet: TweetType;
}

const Tweet = ({tweet}: TweetProps) => {
  return (
    <View style={styles.container}>
    <Image src={tweet.user.image} style={styles.userImage} />
    <View style={styles.mainContainer}>
      <Text>{tweet.user.name}</Text>
    <Text>{tweet.content}</Text>
    </View>

  </View> 
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    userImage: {width:50, height:50,  borderRadius:25},
    mainContainer: {marginLeft:10, flex:1}
   
  });

export default Tweet