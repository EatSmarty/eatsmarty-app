import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { List, Card, Button } from "react-native-paper";

// Define type for a single additive
interface Additive {
  id: string;
  name: string;
  type: string;
}

const additives: Additive[] = [
  { id: "e100", name: "Curcumin", type: "Coloring" },
  { id: "e200", name: "Sorbic Acid", type: "Preservative" },
  { id: "e300", name: "Ascorbic Acid", type: "Antioxidant" },
  { id: "e400", name: "Alginic Acid", type: "Thickener" },
];

const AdditiveList: React.FC = () => {
    const router = useRouter();
  
    return (
    <View style={styles.container}>
      <FlatList
        data={additives}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button onPress={() => {router.push(`/${item.id}`)}}>
            <View style={styles.cardWrapper}>
              <Card style={styles.card}>
                <Card.Content>
                  <List.Item
                    title={item.name}
                    description={item.type}
                    left={(props) => <List.Icon {...props} icon="flask-outline" />}
                  />
                </Card.Content>
              </Card>
            </View>
          </Button>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#E2F6F1",
  },
  cardWrapper: {
    margin: 10,
  },
});

export default AdditiveList;
