import "../global.css";
import { StyleSheet, Text, View, Image } from "react-native";
import stock from "../assets/stock.png";

export function Actor({ actor }) {
    const image = actor.img ? { uri: actor.img } : stock;
    return (
        <View
            key={actor.name}
            className="flex-row bg-slate-800 p-4 rounded-lg mb-4"
        >
            <Image source={image} style={styles.image} />
            <View className="flex-shrink">
                <Text className="mb-1" style={styles.name}>
                    {actor.name}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
    },
    image: {
        height: 147,
        width: 107,
        borderRadius: 10,
        marginRight: 10,
    },
});
