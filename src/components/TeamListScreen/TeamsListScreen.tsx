import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TeamsListScreenProps {
  navigation: any; 
}

const TeamsListScreen: React.FC<TeamsListScreenProps> = ({ navigation }) => {

  const [teamsData, setTeamsData] = useState<any>(null);
  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('Teams');
        console.log(storedData);
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setTeamsData(parsedData);
        }else{
          console.log('no Data');
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };
    fetchTeamsData();
  }, []);

  const handleAddTeam = () => {
    // Navigate to the TeamScreen to add a new team
    navigation.navigate('TeamScr');
  };

  const handleGoGame = () => {
    // Navigate back to the previous screen
    navigation.navigate('CardSelectScr');
  };


    // Handle the case when teams are undefined
    return (
      <View style={styles.container}>
         <Text>Teams Data:</Text>
      {teamsData ? (
        <View>
          {/* {Object.keys(teamsData).map((teamName) => (
            <View key={teamName}>
              <Text>Team Name: {teamName}</Text>
              <Text>Score: {teamsData[teamName].score}</Text>
              <Text>Players:</Text>
              {teamsData[teamName].players.map((player, index) => (
                <View key={index}>
                  <Text>Name: {player.name}</Text>
                  <Text>Played: {player.played ? 'Yes' : 'No'}</Text>
                </View>
              ))}
            </View>
          ))} */}
        </View>
      ) : (
        <Text>No Teams Data</Text>
      )} 
        <View style={styles.buttonsContainer}>
        <Button title="Add Team" onPress={handleAddTeam} />
        <Button title="Go Play" onPress={handleGoGame} />
      </View>
      </View>
      
    );
  
      }

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