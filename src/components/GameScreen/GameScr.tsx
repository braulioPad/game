import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal, Animated, ImageBackground, Pressable, Image } from 'react-native';
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
  const isNavigated = useRef(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [points, setPoints] = useState<number>(0);

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
        const point = await AsyncStorage.getItem('points');
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setTeamsData(parsedData);
          setTeamTurn(teamt ? parseInt(teamt) : 0); // Parse as integer and handle null
          setPoints(point ? parseInt(point) : 1);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isNavigated.current && !isTimerPaused) {
        if (time > 0) {
          setTime(time - 1);
        } else if (time === 0) {
          console.log('TimerScreen Countdown finished');
          const updatedTeamsData = {
            ...teamsData,
            [teamTurn]: {
              ...teamsData[teamTurn],
              score: teamsData[teamTurn].score + score.current,
            },
          };
          AsyncStorage.setItem('TeamData', JSON.stringify(updatedTeamsData))
            .then(() => {
              console.log('Updated teamsData saved successfully');
            })
            .catch((error) => {
              console.error('Error saving updated teamsData:', error);
            });
          isNavigated.current = true; // Set the ref to true when navigation occurs
          requestAnimationFrame(() => {
            navigation.navigate('ScoreScr');
          });
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isTimerPaused, time, teamsData, teamTurn, score, navigation]);

  const handlePauseToggle = () => {
    setIsTimerPaused(!isTimerPaused);
    setIsModalVisible(true);
  }

  useEffect(() => {
    if (!modalVisible) {
      const randomIndex = Math.floor(Math.random() * listCards.length);
      const randomElement = listCards[randomIndex];
      setCard(randomElement);
      listCards.splice(0, 1);
      setListCard(listCards);
    }
  }, [modalVisible, listCards]);

  useEffect(() => {
    if (modalVisible) {
      const modalIntervalId = setInterval(() => {
        setModalTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(modalIntervalId);
            console.log('Modal Countdown finished');
            setModalVisible(false);
            setIsTimerPaused(false);
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
      if (Array.isArray(listCards) && listCards.length > 0) {
        score.current += points;
        // Remove the first element from the array
        listCards.splice(randomIndex, 1);
        // Update the state with the modified array
        setListCard(listCards);
        console.log('score:', score);
      } else {
        setCard('no more cards');
      }
      setColourLeft(getColourNormal());
      console.log('Delayed code executed');
    }, 600);
    console.log('Touchable panel 1 pressed ');

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

  const closeModalPause = () => {
    setIsModalVisible(false);
    setIsTimerPaused(false);
  };

  const finishModalPause = () => {
    const updatedTeamsData = {
      ...teamsData,
      [teamTurn]: {
        ...teamsData[teamTurn],
        score: teamsData[teamTurn].score + score.current,
      },
    };
    AsyncStorage.setItem('TeamData', JSON.stringify(updatedTeamsData))
      .then(() => {
        console.log('Updated teamsData saved successfully');
      })
      .catch((error) => {
        console.error('Error saving updated teamsData:', error);
      });
    isNavigated.current = true; // Set the ref to true when navigation occurs
    requestAnimationFrame(() => {
      navigation.navigate('ScoreScr');
    });
  }

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
            <View style={styles.modalContent}>
              <Text style={styles.modalTextPause}>Team: {Object.values(teamsData)[teamTurn]?.name}</Text>
              <Text style={styles.modalTextTime}>{modalTime} seconds</Text>
            </View>
          </View>
        </Modal>
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            closeModalPause
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTextPause}>Are you sure you want to finish the game?</Text>
              <Pressable style={styles.modalButtonPauseNO} onPress={finishModalPause}>
                <Text style={styles.text}>Yes</Text>
              </Pressable>
              <Pressable style={styles.modalButtonPause} onPress={closeModalPause}>
                <Text style={styles.text}>No</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* Timer Layer */}
        <View style={styles.timerLayer}>
        <Image source={require('../../../assets/btns/clock.png')} style={{ width: 30, marginTop: 10, marginRight: 20, resizeMode: 'contain', }}></Image>
          <Text style={styles.timerText}>{time} seconds</Text>
          {<CustomButton onPress={handlePauseToggle} style={styles.customButton} imageSource={require('../../../assets/btns/stop.png')} pressedImageSource={require('../../../assets/btns/stop2.png')} imageStyle={styles.customImage} />}
        </View>
        <View style={styles.centeredView}>
          <View style={styles.content}>
            <View style={styles.content}>
              <Text style={styles.text}>Card:</Text>
              <Text style={styles.CardText}>{card}</Text>
            </View>
          </View>
        </View>
        {/* TouchableOpacity Layer */}
        <View style={styles.touchableOpacityLayer}>
          <TouchableOpacity
            style={[styles.touchablePanel, { backgroundColor: colourRight }]}
            onPressIn={handleTouchablePressInRight}
            activeOpacity={0} // Set activeOpacity to 0 to make it completely invisible
          />
          <TouchableOpacity
            style={[styles.touchablePanel, { backgroundColor: colourLeft }]}
            onPressIn={handleTouchablePressInLeft}
            activeOpacity={0} // Set activeOpacity to 0 to make it completely invisible
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default GameScr;