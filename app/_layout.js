import { Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";

export default function Layout() {
    return (
        <View className="flex-1 ">
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "#f5c518",
                    headerBackButtonMenuEnabled: false,
                    headerTitle: () => <Logo />,
                    headerBackButtonDisplayMode: "minimal",
                }}
            ></Stack>
            {/* <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "#f5c518",
                    headerTitle: () => <Logo />,
                    headerBackButtonMenuEnabled: false,
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable style={{ marginLeft: 7.5 }}>
                                <CircleInfoIcon />
                            </Pressable>
                        </Link>
                    ),
                }}
            /> */}
        </View>
    );
}
