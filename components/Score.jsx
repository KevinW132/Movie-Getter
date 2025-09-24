import "../global.css";
import { Text, View } from "react-native";

export function Score({ score, maxScore }) {
    const getColors = () => {
        const percentage = score / maxScore;
        if (percentage <= 0.6) {
            return "bg-red-500";
        } else if (percentage < 0.75) {
            return "bg-yellow-500";
        } else if (percentage >= 0.75) {
            return "bg-green-500";
        } else {
            return "bg-blue-500";
        }
    };
    const className = getColors();
    return (
        <View
            className={`${className} w-9 h-9 rounded-full justify-center items-center`}
        >
            <Text className="text-lg font-bold text-white">{score}</Text>
        </View>
    );
}
