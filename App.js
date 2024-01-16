import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import RoutePage from './Route';
import FetchPage from './Fetch';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      {/* "App" is binding the "NavigationContainer" for performing navigation of the project */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: "orange" } }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RoutePage" component={RoutePage} />
          <Stack.Screen name="FetchPage" component={FetchPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App
