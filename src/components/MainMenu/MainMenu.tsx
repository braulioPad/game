import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
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

  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <CustomButton title="Play" onPress={goToPlay} />
      <CustomButton title="Configuration" onPress={goToConfig} /> 
      <CustomButton title="About us" onPress={goToAboutUs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontFamily: 'Eight-Bit-Dragon',
    fontSize: 30,
  },
});

export default MainMenu;