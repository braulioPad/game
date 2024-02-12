import { View, Text, ImageBackground, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomBtn/CustomButton';
import { CardSelectionStyle as styles } from './CardSelectionStyle';

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
        AsyncStorage.setItem('points', JSON.stringify(1));
      } else if (buttonText === 'medium') {
        console.log('saving Data: ' + JSON.stringify(jsonData.typeCard.medium));
        AsyncStorage.setItem('listCards', JSON.stringify(jsonData.typeCard.medium));
        AsyncStorage.setItem('points', JSON.stringify(2));
      }
      else {
        console.log('saving Data: ' + JSON.stringify(jsonData.typeCard.hard));
        AsyncStorage.setItem('listCards', JSON.stringify(jsonData.typeCard.hard));
        AsyncStorage.setItem('points', JSON.stringify(3));
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
      <ImageBackground
        source={require('../../../assets/Backgrounds/selectType.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.containerlist}>
          <View style={styles.containerlists}>
            <Text style={styles.text}>Easy </Text>
            <Image source={require('../../../assets/btns/star1.png')} style={{ width: 60, resizeMode: 'contain', }} />
            <CustomButton onPress={() => handleButtonPress('easy')}
              imageSource={require('../../../assets/btns/easy.png')}
              pressedImageSource={require('../../../assets/btns/easy.png')}
              imageStyle={styles.customImage} />
          </View>
          <View style={styles.containerlists}>
            <Text style={styles.text}>Mid     </Text>
            <Image source={require('../../../assets/btns/star2.png')} style={{ width: 60, resizeMode: 'contain', }} />
            <CustomButton onPress={() => handleButtonPress('medium')}
              imageSource={require('../../../assets/btns/mid.png')}
              pressedImageSource={require('../../../assets/btns/mid.png')}
              imageStyle={styles.customImage} />
          </View>
          <View style={styles.containerlists}>
            <Text style={styles.text}>Hard </Text>
            <Image source={require('../../../assets/btns/star3.png')} style={{ width: 60, resizeMode: 'contain', }} />
            <CustomButton onPress={() => handleButtonPress('easy')}
              imageSource={require('../../../assets/btns/hard.png')}
              pressedImageSource={require('../../../assets/btns/hard.png')}
              imageStyle={styles.customImage} />
          </View>
        </View>

      </ImageBackground>
    </View>
  );
};

export default CardSelectScr;