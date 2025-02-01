import React from "react";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import { List, Card, Provider as PaperProvider } from "react-native-paper";

// Get screen width
const screenWidth = Dimensions.get("window").width;

const additives = [
  { id: "E100", name: "Curcumin", type: "Coloring" },
  { id: "E200", name: "Sorbic Acid", type: "Preservative" },
  { id: "E300", name: "Ascorbic Acid", type: "Antioxidant" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
];

const AdditiveList = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          data={additives}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <Card style={styles.card}>
                <Card.Content>
                  <List.Item
                    title={item.name}
                    description={`Type: ${item.type}`}
                    left={(props) => <List.Icon {...props} icon="flask-outline" />}
                  />
                </Card.Content>
              </Card>
            </View>
          )}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  cardWrapper: {
    width: "100%",
  },
  card: {
    width: screenWidth,
    alignSelf: "center",
    marginBottom: 10,
    // borderRadius: ,
    overflow: "hidden",
  },
});

export default AdditiveList;
