// TeamScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TeamScr: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [teamName, setTeamName] = useState<string>('');
  const [playerName, setPlayerName] = useState<string>('');
  const [teamsData, setTeamsData] = useState([]);

  const createTeam = async () => {
    if (teamName) {
      try {
        const updatedTeamsData = [
          ...teamsData,
          { name: teamName, score: 0},
        ];
        await AsyncStorage.setItem('TeamData', JSON.stringify(updatedTeamsData));
        navigation.navigate('TeamsListScreen');
      } catch (error) {
        console.error('Error saving team data', error);
      }
    } else {
      alert('Please enter a team name and add at least one player.');
    }
  };

  useEffect(() => {
    // Fetch teams data from AsyncStorage when the component mounts
    fetchTeamsData();
  }, []);

  useEffect(() => {
    // Fetch teams data again after creating the team
    fetchTeamsData();
  }, [navigation]);

  const fetchTeamsData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('TeamData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setTeamsData(parsedData);
      }
    } catch (error) {
      console.error('Error fetching Teams data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Team Name:</Text>
      <TextInput
        style={styles.input}
        value={teamName}
        onChangeText={(text) => setTeamName(text)}
      />
      <Button title="Create Team" onPress={createTeam} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default TeamScr;