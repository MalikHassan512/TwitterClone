import { StyleSheet, Image, FlatList, Pressable  } from 'react-native';
import { Text, View } from '../../components/Themed';
import Tweet from '../../components/Tweet';
import tweets from '../../assets/data/tweets';
import { Entypo } from '@expo/vector-icons'; 
import { Link } from 'expo-router';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <FlatList
      data={tweets}
      renderItem={({item}) => <Tweet tweet={item} />}
      keyExtractor={(item) => item.id}
    />

<Link href="/new-tweet" asChild >
    <Pressable style={styles.floatingButton }>
    <Entypo name="plus" size={24} color="white" />
    </Pressable>
    </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  floatingButton: {
    backgroundColor: '#1C9BF0',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
overflow: 'hidden'
  }

});



