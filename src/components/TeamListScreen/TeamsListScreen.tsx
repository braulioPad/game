import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button, TextInput,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TeamsListScreen = ({ navigation }) => {
  const [teamsData, setTeamsData] = useState(null);
  const [newTeamName, setNewTeamName] = useState('');

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('TeamData');
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setTeamsData(parsedData);
        } else {
          console.log('No Data');
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      fetchTeamsData();
    });

    return unsubscribe;
  }, [navigation]);

  const handleAddTeam = async () => {
    if (newTeamName.trim() !== '') {
      const updatedTeamsData = [
        ...teamsData,
        { name: newTeamName, score: 0 } ];
        // Assuming a default score of 0
      setTeamsData(updatedTeamsData);
      await AsyncStorage.setItem('TeamData', JSON.stringify(updatedTeamsData));
      setNewTeamName('');
    }
  };

  const handleDeleteTeam = async (teamName) => {
    if (teamsData && teamsData[teamName]) {
      const { deletedTeam, ...updatedTeamsData } = teamsData;

      setTeamsData(updatedTeamsData);
      await AsyncStorage.setItem('TeamData', JSON.stringify(updatedTeamsData));
    }
  };

  const handleEditTeamName = (teamName, newName) => {
    setTeamsData((prevTeamsData) => {
      const updatedTeamsData = {
        ...prevTeamsData,
        [teamName]: { ...prevTeamsData[teamName], name: newName },
      };
      return updatedTeamsData;
    });
  };

  const handleGoGame = () => {
    const teamTurn = 1; // Assuming you have a specific teamTurn value
    AsyncStorage.setItem('teamTurn', JSON.stringify(teamTurn));
    if (teamsData && typeof teamsData === 'object') {
      const teamKeys = Object.keys(teamsData);
      if (teamKeys.length >= 2) {
        // Check if the number of players is the same in all teams
        navigation.navigate('CardSelectScr');
      }else{
        // Display an alert or perform another action indicating the requirement
        alert('Please create at least two teams before starting the game.');
      }
    }  
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text>Teams Data:</Text>
        {teamsData ? (
          <View>
            {Object.keys(teamsData).map((teamName) => (
              <View key={teamName} style={styles.teamContainer}>
                {/* Replace Text with TextInput */}
                <TextInput
                  style={styles.teamNameInput}
                  value={teamsData[teamName].name}
                  onChangeText={(text) => handleEditTeamName(teamName, text)}
                />
                <Button title="Delete" onPress={() => handleDeleteTeam(teamName)} />
              </View>
            ))}
          </View>
        ) : (
          <Text>No Teams Data</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Enter new team name"
          value={newTeamName}
          onChangeText={(text) => setNewTeamName(text)}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Add Team" onPress={handleAddTeam} />
          <Button title="Star Game" onPress={() => handleGoGame()} />
        </View>
      </View>
    </ScrollView>
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  // Style for the editable area displaying team name
  teamNameInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },

  // Style for the general input (for adding new team name)
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

});
export default TeamsListScreen;