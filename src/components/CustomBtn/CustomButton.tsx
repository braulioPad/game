import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  imageSource?: any; // Add this prop for the image source
  buttonStyle?: Record<string, any>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, imageSource, buttonStyle  }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      {imageSource && <Image source={imageSource} style={styles.buttonImage} />}
      <Text /* style={styles.buttonText} */>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150, // Set the fixed width of the button
    height: 0, // Set the fixed height of the button
    backgroundColor: 'blue', // Add your desired button color
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonImage: {
    width: '100%', // Set the width of the image to cover the entire button
    height: '100%', // Set the height of the image to cover the entire button
    resizeMode: 'cover', // Ensure the image covers the entire space
    borderRadius: 2, // Adjust the border radius to match the button if needed
  },
 /*  buttonText: {
    fontFamily: 'Eight-Bit-Dragon',
    fontSize: 16, // Adjust the font size of the text
    color: 'white', // Add your desired text color
    textAlign: 'center',
   // lineHeight: 50, // Ensure the line height matches the button height
  }, */
});

export default CustomButton;