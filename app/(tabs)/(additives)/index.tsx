import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { List, Card, Button, Text } from "react-native-paper";

interface Additive {
  id: string;
  name: string;
  eNumber: string;
  type: string;
}

const AdditiveList: React.FC = () => {
  const [additives, setAdditives] = useState<Additive[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAdditives = async () => {
      try {
        const response = await fetch("https://eatsmarty.vercel.app/api/additives");
        if (!response.ok) {
          throw new Error("Failed to fetch additives");
        }
        const data = await response.json();
        setAdditives(data.result.additivesList || []);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchAdditives();
  }, []);

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
            <View style={styles.cardWrapper}>
              <Card style={styles.card}>
                <Card.Content>
                  <List.Item
                    title={item.eNumber +" "+ item.name}
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
    width: "100%"
  },
  cardWrapper: {
    margin: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default AdditiveList;
