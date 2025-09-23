import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export function VideoCard({ video }) {
    return (
        <View key={video.id} style={styles.card}>
            <Image source={{ uri: video.img }} style={styles.image} />
            <Text style={styles.primaryTitle}>{video.primaryTitle}</Text>
            <Text style={styles.aggregateRating}>
                {video.aggregateRating}/10
            </Text>
            <Text style={styles.plot}>{video.plot}</Text>
        </View>
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
    },
});
