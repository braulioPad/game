// TeamScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TeamScr: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [teamName, setTeamName] = useState<string>('');
    const [playerName, setPlayerName] = useState<string>('');
    const [players, setPlayers] = useState<string[]>([]);
    const [teamsData, setTeamsData] = useState({});
  
    const addPlayer = () => {
      if (playerName.trim() !== '') {
        setPlayers([...players, playerName]);
        setPlayerName('');
      }
    };

    const createTeam = async  () => {
      if (teamName && players.length > 0) {
        /* Save team data (e.g., to a database) Navigate to another screen or perform other actions For example, navigate back to the home screen */
        try {
            const updatedTeamsData = {
              ...teamsData,
              [teamName]: { teamName, Score: 0, players: players.map((player) => ({ name: player, played: false })) },
            };
            setTeamsData(updatedTeamsData);
            await AsyncStorage.setItem('TeamData', JSON.stringify(updatedTeamsData));
          navigation.goBack();
        } catch (error) {
          console.error('Error Data', error);
        }
      } else {
        alert('Please enter a team name and add at least one player.');
      }
    };

    useEffect(() => {
      // Fetch teams data from AsyncStorage when the component mounts
      fetchTeamsData();
    }, []);
  
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