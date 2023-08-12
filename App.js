import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen/index.js';
import DestinationSearch from './src/components/DestinationSearch/index.js';

export default function App() {
  return (
    // <HomeScreen/>
    <DestinationSearch/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
