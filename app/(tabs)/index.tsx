/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, View, Text } from 'react-native';
import Banner from '@/components/ui/Banner';
import CategoryCard from '@/components/ui/CategoryCard';
import History from '@/components/ui/History';

export default function HomeScreen() {
  return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Banner />
          <CategoryCard />
          <History />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
      paddingHorizontal: 15
    }
  },
);
