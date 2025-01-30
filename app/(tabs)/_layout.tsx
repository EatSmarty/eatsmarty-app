import * as React from 'react';
import { BottomNavigation, MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
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
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline', color: "transparent" },
    { key: 'scan', title: 'Scan', focusedIcon: 'qrcode', color: "transparent" },
    { key: 'additives', title: 'Additives', focusedIcon: 'menu', color: "transparent" }
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

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: routes[index].color, // Change background for selected tab
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <AppBar content={routes[index].title} />

        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={handleIndexChange}
          renderScene={renderScene}
          activeColor='#18DAA3'
          barStyle={{
            backgroundColor: '#E2F6F1',
            elevation: 4,
            height: 70
          }}
          shifting={true}
          sceneAnimationEnabled={true}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
