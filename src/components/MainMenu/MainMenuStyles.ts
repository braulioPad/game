import { StyleSheet } from 'react-native';

export const MainMenuStyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      backgroundImage: {
        flex: 1,
        width: '100%', // Set the image width to 80% of the container width
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
      },
      customImage: {
        width: 50, // Custom width for the image
        height: 50, // Custom height for the image
        marginRight: 10, // Custom margin between button text and image
      },
});