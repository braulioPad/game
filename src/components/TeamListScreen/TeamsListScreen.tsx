import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TeamsListScreenProps {
  route: {
    params?: {
      teams?: { name: string; players: string[] }[];
    };
  };
  navigation: any; 
}

const TeamsListScreen: React.FC<TeamsListScreenProps> = ({ route,navigation }) => {

  useEffect(() => {
    loadUsername();
  }, []);


  const loadUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('Teams');
      console.log('axel', storedUsername);
    } catch (error) {
      console.error('Failed to load username:', error);
    }
  };

  const { teams } = route.params || {};
  const handleAddTeam = () => {
    // Navigate to the TeamScreen to add a new team
    navigation.navigate('TeamScr');
  };

  const handleGoGame = () => {
    // Navigate back to the previous screen
    navigation.navigate('TimerScreen');
  };

  if (!teams) {
    // Handle the case when teams are undefined
    return (
      <View style={styles.container}>
        <Text>No teams available.</Text>
        <View style={styles.buttonsContainer}>
        <Button title="Add Team" onPress={handleAddTeam} />
        <Button title="Go Play" onPress={handleGoGame} />
      </View>
      </View>
      
    );
  }

  // Continue with rendering when teams are defined

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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default TeamsListScreen;