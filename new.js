import { View, Button } from "react-native";

export default function RoutePage({ navigation }) {
    return (
        <View>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}