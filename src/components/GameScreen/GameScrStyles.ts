import { StyleSheet } from 'react-native';

export const GameScrStyles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Eight-Bit-Dragon',
      },
      timerLayer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        zIndex: 1,
      },
      customButton: {
        marginRight: 10, // Adjust the margin as needed
      },
      touchableOpacityLayer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '75%',
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: '8%', // Adjust the percentage or use a specific value
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      timerText: {
        fontSize: 24,
        marginBottom: 20,
        color: 'white',
        fontFamily: 'Eight-Bit-Dragon',
      },
      touchablePanel: {
        flex: 1,
      },
      centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        color: 'white',
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 10,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch' depending on your preference
      },
});