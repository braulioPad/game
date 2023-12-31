import { StyleSheet } from 'react-native';

export const CardSelectionStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        flexDirection: 'column',
      },
      customImage: {
        width: 70,
        height: 50,
        resizeMode: 'contain'
        // Add additional styling for the custom image if needed
      },
});