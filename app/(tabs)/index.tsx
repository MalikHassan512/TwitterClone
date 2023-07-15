import { StyleSheet, Image, FlatList  } from 'react-native';
import { Text, View } from '../../components/Themed';
import Tweet from '../../components/Tweet';
import tweets from '../../assets/data/tweets';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <FlatList
      data={tweets}
      renderItem={({item}) => <Tweet tweet={item} />}
      keyExtractor={(item) => item.id}
    />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
});



