import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import AppBar from '@/components/AppBar';
import HomeScreen from "./index";
import ScanScreen from "./scan";
import AdditivesScreen from "./additives";

export default function TabLayout() {
  const router = useRouter();
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'heart-outline' },
    { key: 'scan', title: 'Scan', focusedIcon: 'qrcode' },
    { key: 'additives', title: 'Additives', focusedIcon: 'menu' }
  ];

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);

    const routeMap: Record<number, "/" | "/scan" | "/additives"> = {
      0: "/",
      1: "/scan",
      2: "/additives"
    };
    router.push(routeMap[newIndex]);
  };

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    scan: ScanScreen,
    additives: AdditivesScreen
  });

  return (
    <View style={styles.container}>
      <AppBar content={routes[index].title} />

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
