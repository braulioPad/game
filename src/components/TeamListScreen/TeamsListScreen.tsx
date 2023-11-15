// TeamsListScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TeamsListScreen: React.FC<{ route: any }> = ({ route }) => {
  const { teams } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Teams List</Text>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.teamContainer}>
            <Text style={styles.teamName}>{item.name}</Text>
            <Text>Players:</Text>
            {item.players.map((player, index) => (
              <Text key={index}>{player}</Text>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  teamContainer: {
    marginBottom: 16,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default TeamsListScreen;
