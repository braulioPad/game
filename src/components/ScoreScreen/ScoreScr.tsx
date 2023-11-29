import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ScoreScreenProps {
  navigation: any;
}

const ScoreScr: React.FC<ScoreScreenProps> = ({ navigation }) => {
  const [teamsData, setTeamsData] = useState<any>(null);
  const [isFinishModalVisible, setFinishModalVisible] = useState(false);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('TeamData');
    const teamt = await AsyncStorage.getItem('teamTurn');
    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      const numberOfTeams = Object.keys(parsedData).length;
      console.log('number of teams ' + numberOfTeams + ', number of team playing: ' + teamt);
      setTeamsData(parsedData);
      // Ensure both teamTurn and numberOfTeams are numbers
      const teamTurn = parseInt(teamt, 10);
      if (!isNaN(teamTurn)) {
        // Make sure teamTurn is less than numberOfTeams
        const updatedTeamTurn = teamTurn < (numberOfTeams - 1) ? teamTurn + 1 : 0;
        AsyncStorage.setItem('teamTurn', JSON.stringify(updatedTeamTurn));
      } else {
        console.error('Invalid teamTurn value:', teamt);
      }
    } else {
      console.log('No Data');
    }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };
    fetchTeamsData();
  }, []);

  const handleGoGame = () => {
    // Navigate back to the previous screen
    navigation.navigate('CardSelectScr');
  };

  const handleFinishGame = () => {
    // Show the finish modal
    setFinishModalVisible(true);
  };

  const handleConfirmFinish = () => {
    // Hide the finish modal
    setFinishModalVisible(false);

    // Navigate to the home screen
    navigation.navigate('Home');
  };

  const handleCancelFinish = () => {
    // Hide the finish modal
    setFinishModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team Scores</Text>
      {teamsData &&
        Object.keys(teamsData).map((teamName) => (
          <View key={teamName} style={styles.teamContainer}>
            <Text style={styles.teamName}> Team {teamsData[teamName].name}</Text>
            <Text style={styles.teamScore}>Score: {teamsData[teamName].score}</Text>
          </View>
        ))}
      <Button title="Next player" onPress={handleGoGame} />
      <Button title="Finish?" onPress={handleFinishGame} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isFinishModalVisible}
        onRequestClose={() => {
          // Handle modal close
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to finish the game?</Text>
            <Pressable style={styles.modalButton} onPress={handleConfirmFinish}>
              <Text>Yes</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={handleCancelFinish}>
              <Text>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamName: {
    fontSize: 18,
    marginRight: 10,
  },
  teamScore: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default ScoreScr;
