import { Text, View } from "react-native";

export function Resaltar({ children }) {
    return <Text className="font-bold capitalize">{children}</Text>;
}
