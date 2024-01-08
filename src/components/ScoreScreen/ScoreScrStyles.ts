import { StyleSheet } from 'react-native';

export const ScoreScrStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      header: {
        fontSize: 24,
        //fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Eight-Bit-Dragon',
      },
      teamContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        fontFamily: 'Eight-Bit-Dragon',
      },
      teamName: {
        fontSize: 18,
        marginRight: 10,
        fontFamily: 'Eight-Bit-Dragon',
      },
      teamScore: {
        fontSize: 15,
       
        fontFamily: 'Eight-Bit-Dragon',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white', 
        padding: 20,
        borderRadius: 10,
        elevation: 5,
      },
      modalText: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'Eight-Bit-Dragon',
      },
      modalButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        marginVertical: 5,
      },
      text:{
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 10,
      },
      customImage: {
        width: 70,
        height: 50,
        resizeMode: 'contain'
        // Add additional styling for the custom image if needed
      },
      backgroundImage: {
        width: '50%', // Adjust the width as needed
        height: '50%', // Adjust the height as needed
        resizeMode: 'contain',
      },
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});