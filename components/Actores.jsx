import { ActivityIndicator, FlashList, Text, View } from "react-native";
import { ScreenLayout } from "./ScreenLayout.jsx";
import { Actor } from "./Actor.jsx";
import { useEffect, useState } from "react";
import { Resaltar } from "./Resaltar.jsx";
import { getCreditsById } from "../lib/metacritic.js";

export function Actores(id) {
    const [credits, setCredits] = useState([]);
    const [director, setDirector] = useState([]);
    const [writer, setWriter] = useState([]);
    const [star, setStar] = useState([]);

    useEffect(() => {
        getCreditsById(id).then((credit) => {
            setDirector(credit.director);
            setWriter(credit.writer);
            setStar(credit.star);
        });
    }, []);

    return (
        <ScreenLayout>
            {director.length === 0 ? (
                <ActivityIndicator color={"white"} size={"large"} />
            ) : (
                <View className="flex-row flex-wrap">
                    <View className="flex-col w-full">
                        <Text className="text-white/70 mt-4 text-left text-xl">
                            <Resaltar>Directors: </Resaltar>
                        </Text>
                        {director.map((director) => (
                            <Actor key={director.name} actor={director} />
                        ))}
                    </View>
                    <View className="flex-col w-full">
                        <Text className="text-white/70 mt-4 text-left text-xl">
                            <Resaltar>Writers: </Resaltar>
                        </Text>
                        {writer.map((writer) => (
                            <Actor key={writer.name} actor={writer} />
                        ))}
                    </View>
                    <View className="flex-col w-full">
                        <Text className="text-white/70 mt-4 text-left text-xl">
                            <Resaltar>Actors: </Resaltar>
                        </Text>
                        {star.map((star) => (
                            <Actor key={star.name} actor={star} />
                        ))}
                    </View>
                </View>
            )}
        </ScreenLayout>
    );
}
