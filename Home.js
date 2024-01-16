import { Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to RoutePage"
        onPress={() => navigation.navigate('RoutePage', { data: ["hi, ", "it is data"] })}
      />
      <Button
        title="Fetch"
        onPress={() => navigation.navigate('FetchPage')}
      />

    </View>
  );
}
export default HomeScreen