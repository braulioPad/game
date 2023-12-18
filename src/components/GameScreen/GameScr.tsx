import React, { useCallback, useEffect, useState,useRef  } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal,Animated,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomBtn/CustomButton';
import { GameScrStyles as styles } from './GameScrStyles';

interface TimerScreenProps {
  navigation: any; // Assuming the navigation prop is of any type for simplicity
}
const GameScr: React.FC<TimerScreenProps> = ({ navigation }) => {

  const [time, setTime] = useState(10);
  const [modalTime, setModalTime] = useState(3);
  const [modalVisible, setModalVisible] = useState(true);
  const [teamsData, setTeamsData] = useState([]);
  const [listCards, setListCard] = useState<string[]>([]);
  const [card, setCard] = useState<string>();
  const [teamTurn, setTeamTurn] = useState<number>(0);
  const score = useRef(0);
  const getColourCorrect = (): string => 'rgba(0, 255, 0, 0.5)';
  const getColourInCorrect = (): string => 'rgba(255, 0, 0, 0.5)';
  const getColourNormal = (): string => 'rgba(255, 0, 0, 0)';
  const [colourLeft, setColourLeft] = useState<string>('rgba(255, 0, 0, 0)');
  const [colourRight, setColourRight] = useState<string>('rgba(255, 0, 0, 0)');
  const [timerScreenIntervalId, setTimerScreenIntervalId] = useState(null);
  const [isTimerPaused, setIsTimerPaused] = useState(true);


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
          console.log('team turn: ', teamTurn);
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
        if (prevTime === 0 && !modalVisible) {
           if (teamsData && teamsData[teamTurn] !== undefined) {
            console.log('TimerScreen Countdown finished');
            const updatedTeamsData = {
              ...teamsData,
              [teamTurn]: {
                ...teamsData[teamTurn],
                score: teamsData[teamTurn].score + score.current,
              },
            };
            console.log('Updated Teams Data:', updatedTeamsData);
            AsyncStorage.setItem('TeamData', JSON.stringify(updatedTeamsData))
              .then(() => {
                console.log('Updated teamsData saved successfully');
              })
              .catch((error) => {
                console.error('Error saving updated teamsData:', error);
              });
          } else {
            console.error('Invalid teamsData or teamTurn:', teamsData);
          } 
          // Perform navigation when the timer reaches 0 and modalVisible is false
          requestAnimationFrame(() => {
            navigation.navigate('ScoreScr');
          });
          clearInterval(timerScreenIntervalId);
        }
        if(isTimerPaused!){
        return prevTime > 0 ? prevTime - 1 : 0;
        }
        return prevTime;
      });
    setTimerScreenIntervalId(timerScreenIntervalId);
    }, 1000);
  }, [navigation, modalVisible, teamsData, teamTurn, score]);

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

  const handleTouchablePressInLeft = () => {
    const randomIndex = Math.floor(Math.random() * listCards.length);
    const randomElement = listCards[randomIndex];
    setCard(randomElement);
    setColourLeft(getColourCorrect());
    setTimeout(() => {
    console.log('score:', score);
    if (Array.isArray(listCards) && listCards.length > 0) {
      score.current += 1;
      // Remove the first element from the array
      listCards.splice(randomIndex, 1);
      // Update the state with the modified array
      setListCard(listCards);
    } else {
      setCard('no more cards');
    }
      setColourLeft(getColourNormal());
      console.log('Delayed code executed');
    }, 600);
    console.log('Touchable panel 1 pressed ');
    
  };

  const handleTouchablePressOutLeft = () => {
    console.log('press out ');
   // setColour(getColourNormal());
  };

  const handleTouchablePressInRight = () => {
    const randomIndex = Math.floor(Math.random() * listCards.length);
    const randomElement = listCards[randomIndex];
    setCard(randomElement);
    setColourRight(getColourInCorrect());
    setTimeout(() => {
    if (Array.isArray(listCards) && listCards.length > 0) {
      // Remove the first element from the array
      listCards.splice(randomIndex, 1);
      // Update the state with the modified array
      setListCard(listCards);
    } else {
      setCard('no more cards');
    }
      setColourRight(getColourNormal());
      console.log('Delayed code executed');
    }, 600);
    console.log('Touchable panel 2 pressed ');
  };

  const handleTouchablePressOutRight = () => {
    console.log('press out Right');
   // setColour(getColourNormal());
  };

  const handlePause = () => {
   setIsTimerPaused(!isTimerPaused);
  };

  return ( 
    <View style={styles.container}>
      <ImageBackground
      source={require('../../../assets/Backgrounds/GmScr.png')} // Replace with the path to your background image
      style={styles.backgroundImage}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Team: {Object.values(teamsData)[teamTurn]?.name}</Text>
              <Text style={styles.modalText}>{modalTime} seconds</Text>
        </View>
      </Modal>
      {/* Timer Layer */}
      <View style={styles.timerLayer}>
        <Text style={styles.timerText}>{time} seconds</Text>
        { <CustomButton  onPress={handlePause} style={styles.customButton} /> }
      </View>
      <View style={styles.centeredView}>
        <View style={styles.content}>
          <View>
            <Text style={styles.text}>Card:</Text>
            <Text style={styles.text}>{card}</Text>
          </View>
        </View>
      </View>
      {/* TouchableOpacity Layer */}
      <View style={styles.touchableOpacityLayer}>
        <TouchableOpacity
          style={[styles.touchablePanel,{backgroundColor: colourRight }]}
          onPressIn={handleTouchablePressInRight}
          onPressOut={handleTouchablePressOutRight}
          activeOpacity={0} // Set activeOpacity to 0 to make it completely invisible
        />
        <TouchableOpacity
          style={[styles.touchablePanel,{ backgroundColor: colourLeft }]}
          onPressIn={handleTouchablePressInLeft}
          onPressOut={handleTouchablePressOutLeft}
          activeOpacity={0} // Set activeOpacity to 0 to make it completely invisible
        />
      </View>
      </ImageBackground>
    </View>
  );
};

export default GameScr;