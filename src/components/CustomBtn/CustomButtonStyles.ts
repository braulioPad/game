import { StyleSheet } from 'react-native';

export const CustomButtonStyles = StyleSheet.create({
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