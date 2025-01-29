import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;

const ScanRoute = () => <Text>Scan</Text>;

const AdditivesRoute = () => <Text>Additives</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'scan', title: 'Scan', focusedIcon: 'album' },
    { key: 'additives', title: 'Additives', focusedIcon: 'history' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: ScanRoute,
    recents: AdditivesRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;