import { Text, View } from "react-native";

const DescriptionScreen = ({ desc }) => {
    return (
        <View style={{ padding: 16, }}>
            <Text>
                {desc}
            </Text>
        </View>
    )
};
export default DescriptionScreen;