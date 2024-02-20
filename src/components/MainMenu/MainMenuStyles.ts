import { StyleSheet, Dimensions} from 'react-native';



const { width, height } = Dimensions.get('window');

export const MainMenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    width:width,
    height:height,
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
    marginBottom: 0, // Adjust the spacing between buttons
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 10, // Add your font size
    marginBottom: 4, // Adjust the spacing between text and button
    color:'#ffffff',
    fontFamily: 'Eight-Bit-Dragon',
    textTransform: 'uppercase',
    marginRight: 22,
  },
  Playbutton:{
    fontSize: 14, // Add your font size
    marginBottom: 4, // Adjust the spacing between text and button
    color:'#ffffff',
    fontFamily: 'Eight-Bit-Dragon',
    textTransform: 'uppercase',
    marginLeft: 10,
  },
  MainImageBtn: {
    width: 180,
    height: 45,
    resizeMode: 'contain',
    marginLeft: 10,
    alignItems:  'center',

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
    justifyContent: 'flex-end', // Move items to the bottom
    top:'10%',
  },
  mainmenubtn: {
    flexDirection: 'column',
  },
  buttonContainerPlay:{
    flexDirection: 'column',
    top:'15%',
    alignItems:  'center',
  },
  gameName: { width: 410, marginTop: 10, marginBottom: 20, top:30,resizeMode: 'contain', },
  mainType: { width: 300, marginBottom: 20, resizeMode: 'contain', },
});