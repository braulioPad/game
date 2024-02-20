import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, ImageBackground, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomBtn/CustomButton';
import { ScoreScrStyles as styles } from './ScoreScrStyles';

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
          //console.log('value update score of '+teamt+'is : '+score);
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
    handleResetScores();
    // Navigate to the home screen
    navigation.navigate('Home');
  };

  const handleCancelFinish = () => {
    // Hide the finish modal
    setFinishModalVisible(false);
  };

  const handleResetScores = async () => {
    // Reset the scores to zero
    const resetScoresData = Object.keys(teamsData).reduce((acc, key) => {
      acc[key] = { ...teamsData[key], score: 0 };
      return acc;
    }, {});

    try {
      await AsyncStorage.setItem('TeamData', JSON.stringify(resetScoresData));
      setTeamsData(resetScoresData);
      console.log('Scores reset successfully');
    } catch (error) {
      console.error('Error resetting scores:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Backgrounds/teamFinish.png')} // Replace with your background image path
        style={styles.backgroundImage}>
        <View>
          <View style={styles.contentGap}>
            <View style={styles.contentGrow}>
              <Text style={styles.header}>Team Scores</Text>
              {teamsData &&
                Object.keys(teamsData).map((teamName) => (
                  <View key={teamName} style={styles.teamContainer}>
                    <View style={styles.contentlsits}>
                      <Text style={styles.teamNames}> Team {teamsData[teamName].name}</Text>
                      <Text style={styles.teamScore}>Score: {teamsData[teamName].score}</Text>
                    </View>
                  </View>
                ))}
            </View>
            <View style={styles.contentGrowsnd}>
              <Image source={require('../../../assets/Backgrounds/Horn.png')} style={{ width: 220, marginRight: 20, resizeMode: 'contain', }}></Image>
            </View>
          </View>

        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamBtns}>
            <Text>Finish?</Text>
            <CustomButton onPress={handleFinishGame} imageSource={require('../../../assets/btns/btns_7.png')}
              imageStyle={styles.customImage} pressedImageSource={require('../../../assets/btns/btns_8.png')} />
          </View>
          <View style={styles.teamBtns}>
            <Text>Next player</Text>
            <CustomButton onPress={handleGoGame} imageSource={require('../../../assets/btns/btns_blue.png')}
              imageStyle={styles.customImage} pressedImageSource={require('../../../assets/btns/btns_2.png')} />
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isFinishModalVisible}
          onRequestClose={() => {
            // Handle modal close
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to finish the game?</Text>
              <Pressable style={styles.PressNo} onPress={handleConfirmFinish}>
                <Text style={styles.text}>Yes</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={handleCancelFinish}>
                <Text style={styles.text}>No</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

export default ScoreScr;
