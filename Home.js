import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to RoutePage"
        onPress={() => navigation.navigate('RoutePage')}
      />
    </View>
  );
}
export default HomeScreen