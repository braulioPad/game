import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CustomButton from '../CustomBtn/CustomButton';

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

  const buttonStyle = {
    width: 150, // Set the width of the button
    height: 50, // Set the height of the button
    // Add other button styles as needed
  };

  return (
    <View style={styles.container} onLayout={handleOnLayout}>
    <ImageBackground
      source={require('../../../assets/Backgrounds/MnScr.png')}
      style={styles.backgroundImage}
      resizeMode="cover" // Ensure the image covers the entire area
    >
      <CustomButton title="Start" onPress={goToPlay} imageSource={require('../../../assets/btns/btns_7.png')} />
      <CustomButton title="Configuration" onPress={goToConfig} />
      <CustomButton title="About us" onPress={goToAboutUs} />
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%', // Set the image width to 80% of the container width
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  },
});

export default MainMenu;