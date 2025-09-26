import { Link, Stack } from "expo-router";
import {
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    Text,
    View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ScreenLayout } from "../components/ScreenLayout";
import { use, useEffect, useState } from "react";
import { getVideoById } from "../lib/metacritic";
import { Score } from "../components/Score";
import { Resaltar } from "../components/Resaltar";
import { Actores } from "../components/Actores";
import { Actor } from "../components/Actor";

export default function Detail() {
    const { id } = useLocalSearchParams();
    const [video, setVideo] = useState({});

    useEffect(() => {
        if (id) {
            getVideoById(id).then((data) => {
                setVideo(data);
            });
        }
    }, [id]);

    return (
        <ScreenLayout>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "gold" },
                    headerTintColor: "black",
                    headerLeft: () => {},
                    headerTitle:
                        video.primaryTitle === undefined
                            ? "Loading..."
                            : `${video.primaryTitle}`,
                    headerRight: () => {},
                }}
            />
            <View>
                {video === null ? (
                    <ActivityIndicator size="large" color="#00ff00" />
                ) : (
                    <View>
                        <ScrollView>
                            <View className="justify-center items-center text-center">
                                <Image
                                    className="mb-4 rounded-lg"
                                    source={{ uri: video.img }}
                                    style={{ width: 300, height: 450 }}
                                />
                                <View className="flex-row justify-center content-center">
                                    <Text className="text-white font-bold mb-4 text-2xl mr-4  flex-shrink">
                                        {video.primaryTitle}
                                    </Text>
                                    <Score
                                        score={video.aggregateRating}
                                        maxScore={10}
                                    />
                                </View>
                                <Text className="text-white/70 mt-4 text-left text-xl">
                                    Type: <Resaltar>{video.type}</Resaltar>
                                </Text>
                                <Text className="text-white/70 text-left text-xl">
                                    Movie Released:{" "}
                                    <Resaltar>{video.startYear}</Resaltar>
                                </Text>
                                <Text className="text-white/70 text-left mb-8 text-xl">
                                    Genre: <Resaltar>{video.genre}</Resaltar>
                                </Text>
                                <Text className="text-white/70 mt-4 text-left mb-8 text-xl">
                                    {video.plot}
                                </Text>
                                <Actores id={id} />
                            </View>
                        </ScrollView>
                    </View>
                )}
            </View>
        </ScreenLayout>
    );
}
