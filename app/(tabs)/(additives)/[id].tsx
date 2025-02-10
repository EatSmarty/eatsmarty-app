import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useAdditives } from "@/components/additiveContext";
// import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome6"

const AdditiveDetail: React.FC = () => {
  const { id } = useLocalSearchParams();
  const { additives } = useAdditives();
  
  const additive = additives.find((item) => item.id == id);

  if (!additive) {
    return <Text style={styles.error}>Additive not found</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.detailCard}>
        <View>
          <Text style={styles.headerText}>{additive.eNumber}</Text>
          <Text style={styles.text}>{additive.name}</Text>
        </View>
        <View>
          <Text style={styles.text}>{additive.source}</Text>
          <Icon name="leaf"/>
          <Icon name="bug"/>
          <Icon name="flask"/>
          <Icon name="fa-solid fa-wine-bottle"/>
        </View>
      </View>
    </View>
  );
};



{/* <Card>
  <Card.Title title={additive.eNumber + " " + additive.name} />
  <Card.Content>
    <Text>Type: {additive.type}</Text>
    <Text>Source: {additive.source}</Text>
    <Text>Status: {additive.isHalal ? "Halal" : "Haram"}</Text>
  </Card.Content>
</Card> */}



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerText: { fontSize: 28, fontWeight: "bold", color: "#333" },
  text: { fontSize: 20, fontWeight: "bold", color: "#333" },
  detailCard: { 
    backgroundColor: "#E2F6F1", 
    width: "95%", 
    height: 200,
    borderRadius: 20,
    position: "absolute",
    top: 0,
    marginTop: 10,
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  error: { color: "red", textAlign: "center", marginTop: 20 },
});

export default AdditiveDetail;