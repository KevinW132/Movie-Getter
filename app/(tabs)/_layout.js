import { Tabs } from "expo-router";
import { InfoIcon, HomeIcon } from "../../components/Icons.jsx";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                },
                tabBarActiveTintColor: "gold",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "about",
                    tabBarIcon: ({ color }) => <InfoIcon color={color} />,
                }}
            />
        </Tabs>
    );
}
