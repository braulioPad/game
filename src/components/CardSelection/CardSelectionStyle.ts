import { StyleSheet } from 'react-native';

export const CardSelectionStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonContainer: {
    flexDirection: 'column',
    position: 'absolute',
    right: '10%',
  },
  customImage: {
    width: 100,
    height: 70,
    resizeMode: 'contain'
  },
  text: {
    fontFamily: 'Eight-Bit-Dragon',
    fontSize: 10,
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
  buttonColumn: {
    marginLeft: 20, // Add margin between columns
    alignItems: 'center', // Align items horizontally in the center
    flexDirection: 'row',
  },
});