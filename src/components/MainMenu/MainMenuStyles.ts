import { StyleSheet, Dimensions} from 'react-native';



export const MainMenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  buttonContainer: {
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
    justifyContent: 'flex-end', // Move items to the bottom
    top:'10%',
  },
  mainmenubtn: {
    flexDirection: 'column',
  },
  buttonContainerPlay:{
    flexDirection: 'column',
    top:'15%',
  },
  gameName: { width: 400, marginTop: 20, marginBottom: 20, resizeMode: 'contain', },
  mainType: { width: 300, marginBottom: 20, resizeMode: 'contain', },
});