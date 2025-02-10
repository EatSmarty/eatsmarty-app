/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useAdditives } from "@/components/additiveContext";
// import SvgInsect from "@/assets/icons/insect.svg";

const iconMap: Record<string, undefined> = {
  plant: require("@/assets/icons/plant.png"),
  synthetic: require("@/assets/icons/synthetic.png"),
  insect: require("@/assets/icons/insect.png"),
  alcohol: require("@/assets/icons/alcohol.png"),
  pig: require("@/assets/icons/pig.png"),
};

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
        <View style={{display: "flex", justifyContent: "space-between"}}>
          <Text style={styles.headerText}>{additive.eNumber}</Text>
          <Text style={styles.text}>{additive.name}</Text>
        </View>
        <View style={{display: "flex", justifyContent: "space-between"}}>
          <Text style={styles.text}>{additive.source}</Text>
          <Image source={iconMap[additive.source]} style={styles.iconStyle}/>
        </View>
      </View>
      <View style={{margin: 15, gap: 20}}>
        <View>
          <Text style={styles.text}>Usage</Text>
          <Text>{additive.usage}</Text>
        </View>
        <View>
          <Text style={styles.text}>Desciption</Text>
          <Text>{additive.description}</Text>
        </View>
        <View>
          <Text style={styles.text}>Restrictions</Text>
          <Text>{additive.restrictions}</Text>
        </View>
        <View>
          <Text style={styles.text}>Side Effect</Text>
          <Text>{additive.sideEffect}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: 10 },
  headerText: { fontSize: 28, fontWeight: "bold", color: "#333" },
  text: { fontSize: 20, fontWeight: "bold", color: "#333" },
  detailCard: { 
    backgroundColor: "#E2F6F1", 
    width: "95%", 
    height: 150,
    borderRadius: 20,
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "stretch",
  },
  iconStyle: { width: 50, height: 50, marginTop: 10 },
  error: { color: "red", textAlign: "center", marginTop: 20 },
});

export default AdditiveDetail;