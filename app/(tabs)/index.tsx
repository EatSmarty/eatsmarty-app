/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, View, Text } from 'react-native';
import Banner from '@/components/ui/Banner';
import CategoryCard from '@/components/ui/CategoryCard';

export default function HomeScreen() {
  return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Banner />
          <CategoryCard />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }
  },
);
