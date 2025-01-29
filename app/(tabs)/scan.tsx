/* eslint-disable react/react-in-jsx-scope */
import AppBar from '@/components/AppBar';
import { StyleSheet } from 'react-native';


export default function TabTwoScreen() {
  return (
    <AppBar content="Scan"/>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
