import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const CardSelectScr = () => {
  const handleButtonPress = (buttonText) => {
    // Implement the logic for each button press
    console.log(`Button "${buttonText}" pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => handleButtonPress('Button 1')} />
        <Button title="Button 2" onPress={() => handleButtonPress('Button 2')} />
        <Button title="Button 3" onPress={() => handleButtonPress('Button 3')} />
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