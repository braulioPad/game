import { View, StyleSheet  } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomBtn/CustomButton';


interface CardsListScreenProps {
  navigation: any;
}




const CardSelectScr: React.FC<CardsListScreenProps> = ({ navigation }) => {
  const [jsonData, setJsonData] = useState<any>(null);

  const handleButtonPress = async (buttonText) => {
    try {
      if (buttonText === 'easy') {
        console.log('saving Data: ' + JSON.stringify(jsonData.typeCard.easy));
        AsyncStorage.setItem('listCards', JSON.stringify(jsonData.typeCard.easy));
      } else if (buttonText === 'medium') {
        console.log('saving Data: ' + JSON.stringify(jsonData.typeCard.medium));
        AsyncStorage.setItem('listCards', JSON.stringify(jsonData.typeCard.medium));
      }
      else {
        console.log('saving Data: ' + JSON.stringify(jsonData.typeCard.hard));
        AsyncStorage.setItem('listCards', JSON.stringify(jsonData.typeCard.hard));
      }
      navigation.navigate('TimerScreen');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };



  useEffect(() => {
    // Function to load the JSON file
    const loadJsonData = async () => {
      try {
        // Import the JSON file using require
        const storedData = await AsyncStorage.getItem('ConfigData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          // Check if slcLanguage is defined before accessing its value
          if (parsedData.slcLanguage === 'Eng') {
            const jsonData = require('../Data/en_card.json');
            setJsonData(jsonData);
          } else if (parsedData.slcLanguage === 'Spa') {
            const jsonData = require('../Data/es_card.json');
            setJsonData(jsonData);
          } else {
            const jsonData = require('../Data/jp_card.json');
            setJsonData(jsonData);
          }
        } else {
          console.log('ConfigData is not present in AsyncStorage.');
        }
      } catch (error) {
        console.error('Error loading JSON file:', error);
      }
    };
    // Call the function to load JSON data
    loadJsonData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton title="Easy cards" onPress={() => handleButtonPress('easy')} />
        <CustomButton title="Medium cards" onPress={() => handleButtonPress('medium')} />
        <CustomButton title="Hard Cards" onPress={() => handleButtonPress('hard')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default CardSelectScr;