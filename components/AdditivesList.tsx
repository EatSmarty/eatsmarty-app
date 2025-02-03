import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { List, Card } from "react-native-paper";


const additives = [
  { id: "E100", name: "Curcumin", type: "Coloring" },
  { id: "E200", name: "Sorbic Acid", type: "Preservative" },
  { id: "E300", name: "Ascorbic Acid", type: "Antioxidant" },
  { id: "E400", name: "Alginic Acid", type: "Thickener" },
  { id: "E500", name: "Alginic Acid", type: "Thickener" },
  { id: "E600", name: "Alginic Acid", type: "Thickener" },
  { id: "E700", name: "Alginic Acid", type: "Thickener" },
  { id: "E800", name: "Alginic Acid", type: "Thickener" },
  { id: "E900", name: "Alginic Acid", type: "Thickener" },
];

const AdditiveList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={additives}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <Card>
              <Card.Content>
                <List.Item
                  title={item.name}
                  description={`${item.type}`}
                  left={(props) => <List.Icon {...props} icon="flask-outline" />}
                />
              </Card.Content>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 10,
  },
  card: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    // borderRadius: ,
    overflow: "hidden",
  },
  cardWrapper: {
    margin: 10
  }
});

export default AdditiveList;
