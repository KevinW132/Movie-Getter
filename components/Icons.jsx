import FontAwesome from "@expo/vector-icons/FontAwesome";

export const CircleInfoIcon = (props) => {
    return (
        <FontAwesome name="info-circle" size={24} color="white" {...props} />
    );
};

export const HomeIcon = (props) => {
    return <FontAwesome name="home" size={32} color="white" {...props} />;
};
