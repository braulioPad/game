import React, { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TimerScreenProps {
  navigation: any; // Assuming the navigation prop is of any type for simplicity
  
}

interface TimerScreenProps {
  navigation: any; // Assuming the navigation prop is of any type for simplicity
}

const GameScr: React.FC<TimerScreenProps> = ({ navigation }) => {
  
  const [time, setTime] = useState(10);
  const [modalTime, setModalTime] = useState(3);
  const [jsonData, setJsonData] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(true);
  const [teamsData, setTeamsData] = useState<any>(null);
  const [listCards,setListCard]=useState<string[]>([]);
  const [card,setCard]=useState<string>();
  const [score, setScore] = useState<number>(0);
  const [teamTurn, setTeamTurn] = useState<number>(0);


  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const configData = await AsyncStorage.getItem('ConfigData');
        const parsedData = JSON.parse(configData);
        console.log('parsedData:', parsedData); // Log the parsed data
        setTime(parsedData.seconds);
        const storedData = await AsyncStorage.getItem('TeamData');
        console.log('data team: ' + storedData);
        const listCardData = await AsyncStorage.getItem('listCards');
        const parsedListCardData = JSON.parse(listCardData);
        const teamt = await AsyncStorage.getItem('teamTurn');
        setListCard(parsedListCardData);
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setTeamsData(parsedData);
          setTeamTurn(teamt ? parseInt(teamt) : 0); // Parse as integer and handle null
        } else {
          console.log('no Data');
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };
    fetchTeamsData();
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const startTimerForTimerScreen = useCallback(() => {
    const timerScreenIntervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerScreenIntervalId);
          console.log('TimerScreen Countdown finished');
/*            if (teamsData && teamsData[teamTurn] !== undefined) {
            // Update the score in teamsData using the score state
            const updatedTeamsData = {
              ...teamsData,
              [teamTurn]: {
                ...teamsData[teamTurn],
                Score: teamsData[teamTurn].Score + score,
              },
            };
            console.log('Updated Teams Data:', updatedTeamsData);
            // Save updated teamsData to AsyncStorage
            AsyncStorage.setItem('TeamData', JSON.stringify(updatedTeamsData))
              .then(() => {
                console.log('Updated teamsData saved successfully');
              })
              .catch((error) => {
                console.error('Error saving updated teamsData:', error);
              }); 
           } else {
            console.error('Invalid teamsData or teamTurn:', teamsData);
          }  */
          requestAnimationFrame(() => {
            navigation.navigate('ScoreScr');
          });
        }
        return prevTime > 0 ? prevTime - 1 : 0;
      });
    }, 1000);
  }, [navigation, teamsData, teamTurn, score]);


  useEffect(() => {
    if (!modalVisible) {
      startTimerForTimerScreen();
      setCard(listCards[0]);
      listCards.splice(0, 1);
      setListCard(listCards);
    }
  }, [modalVisible, startTimerForTimerScreen, listCards]);
  
  useEffect(() => {
    if (modalVisible) {
      const modalIntervalId = setInterval(() => {
        setModalTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(modalIntervalId);
            console.log('Modal Countdown finished');
            setModalVisible(false);
          }
          return prevTime > 0 ? prevTime - 1 : 0;
        });
      }, 1000);
      return () => {
        clearInterval(modalIntervalId);
      };
    }
  }, [modalVisible]);

  const handleTouchable1Press = () => {
    const randomIndex = Math.floor(Math.random() * listCards.length);
    const randomElement = listCards[randomIndex];
    setCard(randomElement); 
     if (Array.isArray(listCards) && listCards.length > 0) {
      // Remove the first element from the array
      listCards.splice(randomIndex, 1);
      // Update the state with the modified array
      setListCard(listCards);
    }else{
      setCard('no more cards');
    } 
    console.log('Touchable panel 1 pressed ');
  };

  const handleTouchable2Press = () => {
    const randomIndex = Math.floor(Math.random() * listCards.length);
    const randomElement = listCards[randomIndex];
    setCard(randomElement);
    if (Array.isArray(listCards) && listCards.length > 0) {
      // Remove the first element from the array
      listCards.splice(randomIndex, 1);
      // Update the state with the modified array
      setListCard(listCards);
    }else{
      setCard('no more cards');
    }
    console.log('Touchable panel 2 pressed ');
  };

  return (
    <View style={styles.container}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{modalTime} seconds</Text>
        </View>
      </Modal>

      {/* Timer Layer */}
      <View style={styles.timerLayer}>
        <View style={styles.content}>
          <Text style={styles.timerText}>{time} seconds</Text>
            <View>
              <Text>Card:</Text>
              <Text>{card}</Text>
            </View>
        </View>
      </View>

      {/* TouchableOpacity Layer */}
      <View style={styles.touchableOpacityLayer}>
        <TouchableOpacity
          style={styles.touchablePanel}
          onPress={handleTouchable1Press}
          activeOpacity={0} // Set activeOpacity to 0 to make it completely invisible
        />
        <TouchableOpacity
          style={styles.touchablePanel}
          onPress={handleTouchable2Press}
          activeOpacity={0} // Set activeOpacity to 0 to make it completely invisible
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalText: {
    fontSize: 20,
    color: 'white',
  },
  timerLayer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Higher zIndex to appear in the back
  },
  touchableOpacityLayer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2, // Lower zIndex to appear in the front
    flexDirection: 'row', // Stack TouchableOpacity elements horizontally
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  touchablePanel: {
    flex: 1,
  },
});

export default GameScr;