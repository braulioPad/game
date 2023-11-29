
import React, { useState, useEffect} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainMenu: React.FC<{ navigation: any }> = ({ navigation }) => {

  useEffect(() => {
    const loadConfigData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('ConfigData');
        if (storedData === null) {
          const updatedConfigData = {
            seconds: 60,  // Assuming you want 'seconds' as a key
            slcLanguage: 'Eng',
          };
          console.log('saving Data: ' + JSON.stringify(updatedConfigData));
          AsyncStorage.setItem('ConfigData', JSON.stringify(updatedConfigData));
        }
      } catch (error) {
        console.error('Error loading ConfigData:', error);
      }
    };
  
    // Call the function to load config data
    loadConfigData();
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


  return (
    <View style={styles.container}>
      <Button title="Play" onPress={goToPlay}/>
      <Button title="Configuration" onPress={goToConfig} />
      <Button title="About us" onPress={goToAboutUs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainMenu;