import React from 'react';
import { TouchableOpacity,Image, ImageStyle, ViewStyle, TextStyle, Text } from 'react-native';
import { CustomButtonStyles as styles } from './CustomButtonStyles';


interface CustomButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  imageSource?: any;
  imageStyle?: ImageStyle;
  buttonText?: string; // Add prop for button text
  textStyle?: TextStyle; // Add prop for text style
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, style, imageSource, imageStyle, buttonText, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {imageSource && <Image source={imageSource} style={[styles.buttonImage, imageStyle]} />}
      {buttonText && <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;