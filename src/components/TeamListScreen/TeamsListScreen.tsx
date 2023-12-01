import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, BackHandler, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface TeamsListScreenProps {
  navigation: any;
}

const TeamsListScreen: React.FC<TeamsListScreenProps> = ({ navigation }) => {

  const [teamsData, setTeamsData] = useState<any>(null);

  useEffect(() => {
    const disableBackButton = () => true; // Always return true to disable the back button
    // Add an event listener for the hardware back button
    BackHandler.addEventListener('hardwareBackPress', disableBackButton);
    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
    };
  }, []);  

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('TeamData');
        console.log(storedData);
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setTeamsData(parsedData);
        } else {
          console.log('no Data');
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };
    fetchTeamsData();
  }, []);

  const handleAddTeam = async () => {
    // Navigate to the TeamScreen to add a new team
    navigation.navigate('TeamScr');
  };

  const handleGoGame = () => {
    const teamTurn = 1; // Assuming you have a specific teamTurn value
    AsyncStorage.setItem('teamTurn', JSON.stringify(teamTurn));
    if (teamsData && typeof teamsData === 'object') {
      const teamKeys = Object.keys(teamsData);
      if (teamKeys.length >= 2) {
        // Check if the number of players is the same in all teams
        navigation.navigate('CardSelectScr');
      }
    }
  };

  const handleEditTeam = (teamName: string) => {
    // Navigate to the EditTeamScreen with the selected team name
    navigation.navigate('EditTeamScr', { teamName });
  };

  const handleClearData = async () => {
    await AsyncStorage.clear();
  };

  React.useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('TeamData');
        console.log(storedData);
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
  // Handle the case when teams are undefined
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text>Teams Data:</Text>
        {teamsData ? (
          <View>
            {Object.keys(teamsData).map((teamName) => (
              <View key={teamName} style={styles.teamContainer}>
                <Text>Team Name: {teamName}</Text>
                <Button title="Edit" onPress={() => handleEditTeam(teamName)} />
              </View>
            ))}
          </View>
        ) : (
          <Text>No Teams Data</Text>
        )}
        <View style={styles.buttonsContainer}>
          <Button title="Add Team" onPress={handleAddTeam} />
          <Button title="Go Play" onPress={handleGoGame} />
          <Button title="Clear Data" onPress={handleClearData} />
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TeamsListScreen;