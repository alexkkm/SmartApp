import { Text, View, Button } from "react-native";

const RoutePage = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home', { message: "Back" })}
            />
            <Text>{route.params.data}</Text>
        </View>
    );
}

export default RoutePage