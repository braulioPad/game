import { StyleSheet } from 'react-native';

export const MainMenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#0B0F26',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    /*    alignItems: 'center', // Center content horizontally within the button container */
    marginBottom: 0, // Adjust the spacing between buttons
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 18, // Add your font size
    marginBottom: 10, // Adjust the spacing between text and button
  },
  customImage: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
    marginRight: 20
    // Add additional styling for the custom image if needed
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',

  },
  elementor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  elementorLeft: {
    flex: 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainmenu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  mainmenubtn: {
    flexDirection: 'column',
  },
  gameName: { width: 400, marginTop: 20, marginBottom: 20, resizeMode: 'contain', },
  mainType: { width: 300, marginBottom: 20, resizeMode: 'contain', },
});