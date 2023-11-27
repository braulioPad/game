import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import DropdownComponent from '../DropDownComp/DropdownComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ConfigScrProps {
  navigation: any;
}
const ConfigScreen: React.FC<ConfigScrProps> = ({ navigation }) => {
  const dropdownItems = [
    { label: 'Spanish', value: 'Spa' },
    { label: 'English', value: 'Eng' },
    { label: 'Japanese', value: 'Nih' },
  ];

  const initialSeconds = 60;
  const [seconds, setSeconds] = useState<number>();
  const [slcLanguage, setslcLanguage] = useState<any>();

  useEffect(() => {
    const loadConfigData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('ConfigData');
        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setSeconds(parsedData.seconds);
          setslcLanguage(parsedData.slcLanguage);
        } else {
          // ConfigData doesn't exist, set default values
          setSeconds(initialSeconds);
          setslcLanguage('Eng');
        }
      } catch (error) {
        console.error('Error loading ConfigData:', error);
      }
    };

    loadConfigData();
  }, []);

  const handleDropdownChange = (value: any) => {
    setslcLanguage(value);
  };
  const handleSecondsChange = (value: number) => {
    setSeconds(value);
  };

  const handleSaveConfig = async  () => {
    try {
      const updatedConfigData = {
        seconds,
        slcLanguage,
      };
      console.log('saving Data: '+ JSON.stringify(updatedConfigData));
      AsyncStorage.setItem('ConfigData', JSON.stringify(updatedConfigData));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Configurations</Text>
      <Text style={styles.durationText}>Game Time: {Math.floor(seconds / 60)}m {seconds % 60}s</Text>
      <Slider
        style={styles.slider}
        minimumValue={60}
        maximumValue={300} // Adjust as needed
        step={1}
        value={seconds}
        onValueChange={handleSecondsChange}
      />
      <Text style={styles.label}>Selected language: {slcLanguage}</Text>
      <View style={styles.centeredDropdownContainer}>
        <DropdownComponent items={dropdownItems} onValueChange={handleDropdownChange} slcLanguage={slcLanguage} />
      </View>
      <Button title="Save" onPress={handleSaveConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 200,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  durationText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredDropdownContainer: {
    alignItems: 'center', // Align the dropdown to the center
  },
});

export default ConfigScreen;
