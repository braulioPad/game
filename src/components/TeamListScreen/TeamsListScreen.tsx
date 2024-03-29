import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomBtn/CustomButton';
import { TeamsListScreenStyles as styles } from './TeamsListScreenStyles';


const TeamsListScreen = ({ navigation }) => {
  const [teamsData, setTeamsData] = useState(null);
  const [newTeamName, setNewTeamName] = useState('');
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('TeamData');
        /* setConfigLoaded(true); */
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setTeamsData(parsedData);
        } else {
          console.log('No Data');
        }
        const skipTuto = await AsyncStorage.getItem('skipTutorial');
        if (skipTuto !== null) {
          setChecked(JSON.parse(skipTuto));
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

  const handleAddTeam = () => {
    try {
      if (newTeamName.trim() !== '') {
        setTeamsData((prevTeamsData) => {
          if (Array.isArray(prevTeamsData)) {
            // If already an array, proceed with addition logic
            const updatedTeamsData = [
              ...prevTeamsData,
              { name: newTeamName, score: 0 },
            ];
            return updatedTeamsData;
          } else if (prevTeamsData && typeof prevTeamsData === 'object') {
            // If an object with a single team, convert to an array
            const singleTeamArray = Object.values(prevTeamsData);
            return [...singleTeamArray, { name: newTeamName, score: 0 }];
          }

          // If neither an array nor an object, return a new array with the new team
          return [{ name: newTeamName, score: 0 }];
        });

        setNewTeamName('');
      }
    } catch (error) {
      console.error('Error in handleAddTeam:', error);
      // Handle the error as needed (e.g., show an alert)
    }
  };

  const handleDeleteTeam = (teamName) => {
    try {
      setTeamsData((prevTeamsData) => {
        if (prevTeamsData && prevTeamsData[teamName]) {
          const { [teamName]: deletedTeam, ...updatedTeamsData } = prevTeamsData;
          return updatedTeamsData;
        }
        return prevTeamsData; // Return the original state if teamName doesn't exist
      });
    } catch (error) {
      console.error('Error in handleDeleteTeam:', error);
    }
  };

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

  const handleGoGame = async () => {
    const teamTurn = 0; // Assuming you have a specific teamTurn value
    AsyncStorage.setItem('teamTurn', JSON.stringify(teamTurn));
    await AsyncStorage.setItem('TeamData', JSON.stringify(teamsData));
    // await AsyncStorage.clear();
    if (teamsData && typeof teamsData === 'object') {
      const teamKeys = Object.keys(teamsData);
      if (teamKeys.length >= 2) {
        // Check if the number of players is the same in all teams
        if (!isChecked) {
          navigation.navigate('TutorialScreen');
        } else {
          navigation.navigate('CardSelectScr');
        }

      } else {
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
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Backgrounds/team.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.containerList}>
        <View style={styles.containerListLeft}>
        <Text style={styles.text}>Teams List</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.innerContainer}>
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
                        <CustomButton onPress={() => handleDeleteTeam(teamName)} imageSource={require('../../../assets/btns/delbtn.png')} imageStyle={styles.deletebtn} />
                      </View>
                    ))}
                  </View>
                ) : (
                  <Text style={styles.text}>No Teams Data</Text>
                )}

              </View>
            </ScrollView>
            <View style={styles.Newteamsgroup}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter new team name"
                    value={newTeamName}
                    onChangeText={(text) => setNewTeamName(text)}
                  />
                  <CustomButton onPress={handleAddTeam} imageSource={require('../../../assets/btns/add.png')} pressedImageSource={require('../../../assets/btns/add.png')} style={{ width: 36, marginLeft: 10, resizeMode: 'contain', }} />
                </View>
          </View>
          <View style={styles.containerTeams}>
            <View style={styles.buttonsContainer}>
              <Text style={styles.text}>Next</Text>
              <CustomButton onPress={() => handleGoGame()} imageSource={require('../../../assets/btns/btns_5.png')} pressedImageSource={require('../../../assets/btns/btns_6.png')} imageStyle={styles.customImage} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>

  );
};
export default TeamsListScreen;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
