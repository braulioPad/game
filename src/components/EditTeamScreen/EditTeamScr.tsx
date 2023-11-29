// EditTeamScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type EditTeamScreenProps = {
    route: {
      params: {
        teamName: string;
      };
    };
    navigation: any; 
  };
  
  const EditTeamScr: React.FC<EditTeamScreenProps> = ({ route, navigation }) => {
  const { teamName } = route.params;
  const [editedTeamName, setEditedTeamName] = useState(teamName);
  const [editedScore, setEditedScore] = useState('');
  const [editedPlayers, setEditedPlayers] = useState('');

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('TeamData');
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          const teamData = parsedData[teamName];
          setEditedScore(String(teamData.score));
          setEditedPlayers(teamData.players.map((player) => player.name).join(', '));
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };
    fetchTeamData();
  }, [teamName]);

  const handleSaveChanges = async () => {
    try {
      // Fetch existing data
      const storedData = await AsyncStorage.getItem('TeamData');
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData);

        // Update the team data
        parsedData[teamName] = {
          ...parsedData[teamName],
          teamName: editedTeamName,
          score: parseInt(editedScore, 10) || 0,
          players: editedPlayers.split(',').map((playerName) => ({
            name: playerName.trim(),
            played: false,
          })),
        };

        // Save the updated data
        await AsyncStorage.setItem('TeamData', JSON.stringify(parsedData));

        // Navigate back to the TeamsListScreen
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error updating team data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Edit Team</Text>
      <Text>Players</Text>
      <TextInput
        style={styles.input}
        value={editedPlayers}
        onChangeText={(text) => setEditedPlayers(text)}
        placeholder="Players (comma-separated)"
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default EditTeamScr;