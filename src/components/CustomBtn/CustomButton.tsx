import React, {  useState } from 'react';
import { TouchableOpacity,Image, ImageStyle, ViewStyle, TextStyle, Text } from 'react-native';
import { CustomButtonStyles as styles } from './CustomButtonStyles';


interface CustomButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  imageSource?: any;
  pressedImageSource?: any;
  imageStyle?: ImageStyle;
  buttonText?: string;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  style,
  imageSource,
  pressedImageSource,
  imageStyle,
  buttonText,
  textStyle,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Image
        source={isPressed ? pressedImageSource : imageSource}
        style={imageStyle}
      />
      {buttonText && <Text style={textStyle}>{buttonText}</Text>}
    </TouchableOpacity>
  );
};


export default CustomButton;