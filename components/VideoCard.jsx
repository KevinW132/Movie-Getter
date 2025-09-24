import "../global.css";
import { useEffect, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";

export function VideoCard({ video }) {
    return (
        <Link href={`/${video.primaryTitle}`} asChild>
            <Pressable>
                {({ pressed }) => (
                    <View
                        key={video.id}
                        style={{
                            opacity: pressed ? 0.7 : 1,
                        }}
                        className="flex-row bg-slate-800 p-4 rounded-lg mb-10"
                    >
                        <Image
                            source={{ uri: video.img }}
                            style={styles.image}
                        />
                        <View>
                            <Text className="mb-1" style={styles.primaryTitle}>
                                {video.primaryTitle}
                            </Text>
                            <Score
                                score={video.aggregateRating}
                                maxScore={10}
                            />
                            <Text
                                className="mt-2 flex-shrink-0"
                                style={styles.plot}
                            >
                                {video.plot.slice(0, 100)}...
                            </Text>
                        </View>
                    </View>
                )}
            </Pressable>
        </Link>
    );
}

export function AnimatedVideoCard({ video, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 200,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <VideoCard video={video} />
        </Animated.View>
    );
}
const styles = StyleSheet.create({
    card: {
        marginBottom: 48,
    },
    primaryTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
    },
    plot: {
        fontSize: 16,
        color: "#eee",
    },
    aggregateRating: {
        fontSize: 20,
        color: "green",
        fontWeight: "bold",
        marginBottom: 10,
    },
    image: {
        height: 147,
        width: 107,
        borderRadius: 10,
        marginRight: 10,
    },
});
