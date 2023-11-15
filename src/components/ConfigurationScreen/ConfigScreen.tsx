import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import RNPickerSelect from 'react-native-picker-select';
import DropdownComponent from '../DropDownComp/DropdownComponent';

const ConfigScreen: React.FC = () => {
  
  const handleSecondsChange = (value: number) => {
    setSeconds(value);
  };
  const dropdownItems = [
    { label: 'Spanish', value: 'Spa' },
    { label: 'English', value: 'Eng' },
    { label: 'Japanese', value: 'Nih' },
  ];
  const handleDropdownChange = (value: any) => {
    setSelectedValue(value);
  };
  const [seconds, setSeconds] = useState<number>(0);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const [selectedValue, setSelectedValue] = useState<any>(null);
  

  return (
    <View style={styles.container}>
      <Text>Configurations</Text>
      <Text style={styles.durationText}>Game Time: {minutes}m {remainingSeconds}s</Text>
      <Slider
        style={styles.slider}
        minimumValue={60}
        maximumValue={300} // Adjust as needed
        step={1}
        value={seconds}
        onValueChange={handleSecondsChange}
      />
      <Text style={styles.label}>Selected language: {selectedValue}</Text>
      <View style={styles.centeredDropdownContainer}>
        <DropdownComponent items={dropdownItems} onValueChange={handleDropdownChange} />
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