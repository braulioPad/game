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
        backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background
      },
      modalText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Eight-Bit-Dragon',
      },
      timerLayer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 40,
        zIndex: 1,
      },
      customButton: {
        position: 'absolute',
        right:20,
        top:30,
        alignItems: 'flex-end',
        alignContent: 'flex-end',
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
        fontSize: 16,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch' depending on your preference
      },
      customImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        zIndex:1,
        // Add additional styling for the custom image if needed
      },
      CardText:{
        color: 'white',
       /*  fontFamily: 'Eight-Bit-Dragon', */
        fontSize: 46,
        
      },
      modalContent: {
        backgroundColor: 'white', 
        padding: 20,
        borderRadius: 10,
        elevation: 5,
      },
      modalButtonPause: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        marginVertical: 5,
      },
      modalButtonPauseNO: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#d41a3d',
        alignItems: 'center',
        marginVertical: 5,
      },
      modalTextPause: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'Eight-Bit-Dragon',
      },
      modalTextTime: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'Eight-Bit-Dragon',
        justifyContent: 'center',
      },
      timerLayer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      timerText:{
        marginTop: 30,
        fontSize: 28,
        marginBottom: 20,
        fontFamily: 'Eight-Bit-Dragon',
        color: 'white',
      },
});