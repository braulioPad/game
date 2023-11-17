// TeamScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TeamScr: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [teamName, setTeamName] = useState<string>('');
    const [playerName, setPlayerName] = useState<string>('');
    const [players, setPlayers] = useState<string[]>([]);
  
    const addPlayer = () => {
      if (playerName.trim() !== '') {
        setPlayers([...players, playerName]);
        setPlayerName('');
      }
    };
  
    const createTeam = async  () => {
      if (teamName && players.length > 0) {
        // Save team data (e.g., to a database)
        console.log('Team Name:', teamName);
        console.log('Players:', players);
  
        // Navigate to another screen or perform other actions
        // For example, navigate back to the home screen
       

        try {
            await AsyncStorage.setItem('Teams', teamName);
            navigation.goBack();
        } catch (error) {
          console.error('axel', error);
        }

        /*
        [
          teams: {
            teamName: 'string',
            Score: 'number',
            players: {
              name: 'string',
              played: 'boolean',
            }
          }
        ]
        */



      } else {
        alert('Please enter a team name and add at least one player.');
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
  
        <Text style={styles.label}>Players:</Text>
        {players.map((player, index) => (
          <Text key={index}>{player}</Text>
        ))}
        <TextInput
          style={styles.input}
          placeholder="Enter player name"
          value={playerName}
          onChangeText={(text) => setPlayerName(text)}
        />
  
        <Button title="Add Player" onPress={addPlayer} />
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