import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet,ImageBackground, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CustomButton from '../CustomBtn/CustomButton';
import { MainMenuStyles as styles } from './MainMenuStyles';

SplashScreen.preventAutoHideAsync();

const MainMenu: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Eight-Bit-Dragon': require('../../../assets/fonts/Eight-Bit-Dragon.ttf'),
  });

  const [configLoaded, setConfigLoaded] = useState(false);

  const loadConfigData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('ConfigData');
      if (storedData === null) {
        const updatedConfigData = {
          seconds: 60,
          slcLanguage: 'Eng',
        };
        console.log('saving Data: ' + JSON.stringify(updatedConfigData));
        await AsyncStorage.setItem('ConfigData', JSON.stringify(updatedConfigData));
      }
      setConfigLoaded(true);
    } catch (error) {
      console.error('Error loading ConfigData:', error);
    }
  };

  useEffect(() => {
    SplashScreen.hideAsync(); // hide the splashscreen
    loadConfigData();
  }, []);

  const handleOnLayout = useCallback(() => {
    // Your logic here
  }, []);

  const goToConfig = () => {
    navigation.navigate('configuration');
  };

  const goToAboutUs = () => {
    navigation.navigate('aboutUs');
  };

  const goToPlay = () => {
    navigation.navigate('TeamsListScreen');
  };

  if (!fontsLoaded || !configLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <ImageBackground
        source={require('../../../assets/Backgrounds/MnScr.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Play Button */}
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Go Play</Text>
          <CustomButton
            onPress={goToPlay}
            imageSource={require('../../../assets/btns/btns_7.png')}
            imageStyle={styles.customImage}
          />
        </View>

        {/* Config Button */}
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Config</Text>
          <CustomButton
            onPress={goToConfig}
            imageSource={require('../../../assets/btns/btns_7.png')}
            imageStyle={styles.customImage}
          />
        </View>

        {/* About Us Button */}
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>About Us</Text>
          <CustomButton
            onPress={goToAboutUs}
            imageSource={require('../../../assets/btns/btns_7.png')}
            imageStyle={styles.customImage}
          />
        </View>
      </ImageBackground>
    </View>
  );
};


export default MainMenu;