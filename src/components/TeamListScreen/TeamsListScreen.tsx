import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button, TextInput,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomBtn/CustomButton';
import { TeamsListScreenStyles as styles } from './TeamsListScreenStyles';



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

  const handleAddTeam =  () => {
    try {
      if (newTeamName.trim() !== '') {
        // Ensure teamsData is an array or initialize it as an empty array
        const teamsArray = Array.isArray(teamsData) ? teamsData : [];
        const updatedTeamsData = [
          ...teamsArray,
          { name: newTeamName, score: 0 },
        ];
        setTeamsData(updatedTeamsData);
        setNewTeamName('');
      }
    } catch (error) {
      console.error('Error in handleAddTeam:', error);
      // Handle the error as needed (e.g., show an alert)
    }
  };

  const handleDeleteTeam = (teamName) => {
    try {
      if (teamsData && teamsData[teamName]) {
        const { [teamName]: deletedTeam, ...updatedTeamsData } = teamsData;
        setTeamsData(updatedTeamsData);
      }
    } catch (error) {
      console.error('Error in handleDeleteTeam:', error);
    }
  };

  useEffect(() => {
    // Do something after teamsData changes (e.g., update the screen)
    // You can put any logic here that needs to run after deleting a team
  }, [teamsData]);

  const handleEditTeamName = (teamName, newName) => {
    console.log('text changed');
    setTeamsData((prevTeamsData) => {
      const updatedTeamsData = {
        ...prevTeamsData,
        [teamName]: { ...prevTeamsData[teamName], name: newName },
      };
      return updatedTeamsData;
    });
  };

  const handleGoGame = async() => {
    const teamTurn = 1; // Assuming you have a specific teamTurn value
    AsyncStorage.setItem('teamTurn', JSON.stringify(teamTurn));
    await AsyncStorage.setItem('TeamData', JSON.stringify(teamsData));
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


  const handleClearData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error in handleClearData:', error);
      // Handle the error as needed (e.g., show an alert)
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Teams Data:</Text>
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
                <Text>Delete</Text>
                <CustomButton  onPress={() => handleDeleteTeam(teamName)} />
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
          <Text>Add Team</Text>
          <CustomButton  onPress={handleAddTeam} />
          <Text>Star Game</Text>
          <CustomButton  onPress={() => handleGoGame()} />
          <Text>Reset Data</Text>
          <CustomButton  onPress={() => handleClearData()} />
        </View>
      </View>
    </ScrollView>
  );
        };
export default TeamsListScreen;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
