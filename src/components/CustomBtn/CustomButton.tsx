import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import { CustomButtonStyles as styles } from './CustomButtonStyles';


interface CustomButtonProps {
  onPress: () => void;
  style?: any;
  imageSource?: any; // Add this prop for the image source
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, style, imageSource }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {imageSource && <Image source={imageSource} style={styles.buttonImage} />}
    </TouchableOpacity>
  );
};

export default CustomButton;