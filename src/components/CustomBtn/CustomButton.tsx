import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  imageSource?: any; // Add this prop for the image source
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, imageSource }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {imageSource && <Image source={imageSource} style={styles.buttonImage} />}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // Align image and text horizontally
    alignItems: 'center', // Center vertically
    backgroundColor: 'blue', // Add your desired button styles
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonImage: {
    width: 20, // Set the width of the image
    height: 20, // Set the height of the image
    marginRight: 5, // Spacing between image and text
  },
  buttonText: {
    fontFamily: 'Eight-Bit-Dragon',
    fontSize: 10,
    color: 'white', // Add your desired text color
    textAlign: 'center',
  },
});

export default CustomButton;