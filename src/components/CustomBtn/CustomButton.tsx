import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton: React.FC<{ title: string; onPress: () => void; style?: any }> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue', // Add your desired button styles
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Eight-Bit-Dragon',
    fontSize: 10,
    color: 'white', // Add your desired text color
    textAlign: 'center',
  },
});

export default CustomButton;