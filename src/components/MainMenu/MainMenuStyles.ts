import { StyleSheet } from 'react-native';

export const MainMenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  buttonContainer: {
 /*    alignItems: 'center', // Center content horizontally within the button container */
    marginBottom: 20, // Adjust the spacing between buttons
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18, // Add your font size
    marginBottom: 10, // Adjust the spacing between text and button
  },
  customImage: {
    width: 70,
    height: 50,
    resizeMode: 'contain'
    // Add additional styling for the custom image if needed
  },
});