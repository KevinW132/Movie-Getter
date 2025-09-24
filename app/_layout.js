import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
    return (
        <View className="flex-1 ">
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "#f5c518",
                    headerTitle: "",
                    headerBackButtonMenuEnabled: false,
                    headerLeftContainerStyle: {
                        paddingHorizontal: 0,
                        backgroundColor: "transparent",
                    },
                    headerRightContainerStyle: {
                        paddingHorizontal: 0,
                        backgroundColor: "transparent",
                    },
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable style={{ marginLeft: 7.5 }}>
                                <CircleInfoIcon />
                            </Pressable>
                        </Link>
                    ),
                }}
            />
        </View>
    );
}
