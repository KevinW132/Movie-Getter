import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ScreenLayout } from "../components/ScreenLayout";
import { use, useEffect } from "react";

export default function Detail() {
    const { id } = useLocalSearchParams();
    const [video, setVideo] = useState({});

    useEffect(() => {}, []);

    return (
        <ScreenLayout>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "gold" },
                    headerTintColor: "black",
                    headerLeft: () => {},
                    headerTitle: `${id}`,
                    headerRight: () => {},
                }}
            />
            <View>
                <Text className="text-white font-bold mb-8 text-2xl">{id}</Text>
                <Link href="/" className="text-blue-500 mb-4">
                    Volver Atras
                </Link>
            </View>
        </ScreenLayout>
    );
}
