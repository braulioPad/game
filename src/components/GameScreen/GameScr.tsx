import React, { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal  } from 'react-native';

interface TimerScreenProps {
  navigation: any; // Assuming the navigation prop is of any type for simplicity
}

import data from '../Data/en_card.json';
const GameScr: React.FC<TimerScreenProps> = ({ navigation }) => {
  const [time, setTime] = useState(60); // Set the initial countdown duration for the screen
  const [modalTime, setModalTime] = useState(3); // Set the initial countdown duration for the modal
  const [jsonData, setJsonData] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    // Start the countdown interval for the screen
    const screenIntervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(screenIntervalId); // Stop the interval when screen countdown reaches 0
          console.log('Screen Countdown finished');
          setModalVisible(true); // Show the modal after the screen countdown finishes
        }
        return prevTime > 0 ? prevTime - 1 : 0;
      });
    }, 1000);

    // Cleanup function for screen countdown interval when the component unmounts
    return () => {
      clearInterval(screenIntervalId);
    };
  }, []);

  useEffect(() => {
    // Start the countdown interval for the modal when it is visible
    if (modalVisible) {
      const modalIntervalId = setInterval(() => {
        setModalTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(modalIntervalId); // Stop the interval when modal countdown reaches 0
            console.log('Modal Countdown finished');
            setModalVisible(false); // Close the modal after the modal countdown finishes
          }
          return prevTime > 0 ? prevTime - 1 : 0;
        });
      }, 1000);

      // Cleanup function for modal countdown interval when the component unmounts or modal is closed
      return () => {
        clearInterval(modalIntervalId);
      };
    }
  }, [modalVisible]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleTouchable1Press = () => {
    // Handle the press on the first invisible touchable panel
    console.log('Touchable panel 1 pressed');
  };

  const handleTouchable2Press = () => {
    // Handle the press on the second invisible touchable panel
    console.log('Touchable panel 2 pressed');
  };

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

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
          {jsonData && (
            <View>
              <Text>Loaded JSON Data:</Text>
              <Text>{JSON.stringify(jsonData, null, 2)}</Text>
            </View>
          )}
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

      <Button title="Go Back" onPress={handleGoBack} />
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