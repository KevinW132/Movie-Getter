import { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getMetacritic } from "../lib/metacritic.js";
import { AnimatedVideoCard, VideoCard } from "./VideoCard.jsx";
import { Logo } from "./Logo.jsx";

export function Main() {
    const [videos, setvideos] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getMetacritic().then((videos) => {
            setvideos(videos);
        });
    }, []);
    return (
        <View style={{ paddingTop: insets.top }}>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <Logo />
            </View>
            {videos.length === 0 ? (
                <ActivityIndicator color={"white"} size={"large"} />
            ) : (
                <FlatList
                    data={videos}
                    keyExtractor={(video) => video.id}
                    renderItem={({ item: video, index }) => (
                        <AnimatedVideoCard
                            key={video.id}
                            video={video}
                            index={index}
                        />
                    )}
                />
            )}
        </View>
    );
}
