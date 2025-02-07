/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, View, ScrollView } from 'react-native';
import Banner from '@/components/ui/Banner';
import CategoryCard from '@/components/ui/CategoryCard';
import History from '@/components/Products';

export default function HomeScreen() {
  return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.container}>
            <Banner />
            <CategoryCard />
            <History />
          </View>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
      paddingHorizontal: 15
    },
    content: {
      paddingBottom: 30
    }
  },
);
