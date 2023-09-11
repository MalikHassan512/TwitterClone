import Tweet from "../../components/Tweet";
import { Text } from "react-native";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";

export default function TweetScreen () {
    const {id} = useSearchParams()

    const tweet = tweets.find((tweet) => tweet.id === id);

    if(!tweet) {
        return <Text> Tweet not found </Text>
    }

    return (
        <Tweet tweet={tweet} />
    );
    }


    