import React from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { List, Card, Button, Text } from "react-native-paper";
import { useAdditives } from "@/components/additiveContext";


const AdditiveList: React.FC = () => {
  const { additives, loading, error } = useAdditives();
  const router = useRouter();

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={additives}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button onPress={() => router.push(`/${item.id}`)}>
            <Card style={item.isHalal ? styles.halalcard : styles.haramcard}>
              <Card.Content>
                <List.Item
                  title={item.eNumber + " " + item.name}
                  description={item.isHalal ? "Halal" : "Haram"}
                  left={(props) => <List.Icon {...props} icon={item.source === "plant" ? "leaf" : "flask"} />}
                />
              </Card.Content>
            </Card>
          </Button>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 10 },
  halalcard: { backgroundColor: "#E2F6F1", width: "100%" },
  haramcard: { backgroundColor: "#FF6961", width: "100%" },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  error: { color: "red", textAlign: "center", marginTop: 20 },
});

export default AdditiveList;
