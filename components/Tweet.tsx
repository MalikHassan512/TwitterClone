import { View, Text, StyleSheet, Image, Pressable  } from 'react-native'
import React from 'react'
import { TweetType } from '../types'
import { Entypo, EvilIcons } from '@expo/vector-icons'; 
import IconButton  from './IconButton';
import { Link } from 'expo-router';
  

type TweetProps = {
  tweet: TweetType;
}

const Tweet = ({tweet}: TweetProps) => {
  return (
    <Link href={`/tweet/${tweet?.id}`} asChild>
    <Pressable  style={styles.container}>
    <Image src={tweet.user.image} style={styles.userImage} />
    <View style={styles.mainContainer}>
    <View style={styles.row}>
    <Text style={styles.name}>{tweet.user.name}</Text>
      <Text style={styles.name}>{tweet.user.username}</Text>
      <Text style={styles.name}>·2h</Text>
      <Entypo name="dots-three-horizontal" size={14} color="gray" style={{marginLeft:'auto'}} />
    </View>
    <Text>{tweet.content}</Text>
    {!!tweet.image && <Image source={{uri: tweet.image}} style={styles.image} />
    }

    <View style={styles.footerContainer}>
      <IconButton icon='comment' text={tweet.numberOfComments} />
      <IconButton icon='retweet' text={tweet.numberOfRetweets} />
      <IconButton icon='heart' text={tweet.numberOfLikes} />
      <IconButton icon='chart' text={tweet.impressions || 0} />
      <IconButton icon='share-apple'  />
      </View>
    </View>
  </Pressable> 
  </Link>
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
    mainContainer: {marginLeft:10, flex:1},
    image : {
      width: '100%',
      aspectRatio: 3/2,
      marginTop: 10,
      borderRadius: 15,
    },
    name: {
      fontWeight: 'bold',
      marginRight: 5
    },
    row:{
      flexDirection: 'row'
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10
    }
    
  });

export default Tweet