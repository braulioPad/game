import { StyleSheet } from 'react-native';

export const TeamsListScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
      header: {
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 10,
        marginBottom: 16,
      },
      teamName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 16,
        alignItems: 'center',

      },
      label: {
        fontSize: 16,
        marginBottom: 5,
      },
      teamContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width:200,
      },
    
      // Style for the editable area displaying team name
      teamNameInput: {
        flex: 1,
        height: 32,
        borderColor: 'rgb(44,42,65)',
        borderWidth: 1.5,
        marginRight: 10,
        paddingHorizontal: 10,
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 10,
        borderRadius: 40,
        backgroundColor: 'white',
      },
    
      // Style for the general input (for adding new team name)
      input: {
        height: 32,
        width:200,
        borderColor: 'rgb(44,42,65)',
        borderWidth: 1.5,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 10,
        borderRadius: 40,
        backgroundColor: 'white',
      },
      text:{
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 14,
        margin:12,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
      },
      buttonContainer: {
        alignItems: 'center', // Center content horizontally within the button container
        marginBottom: 20, // Adjust the spacing between buttons
      },
      buttonText: {
       /*  fontFamily: 'Arial', // Add your font family */
        fontSize: 18, // Add your font size
        marginBottom: 10, // Adjust the spacing between text and button
      },
      customImage: {
        width: 150,
        height: 50,
        resizeMode: 'contain'
        // Add additional styling for the custom image if needed
      },
      deletebtn: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
        // Add additional styling for the custom image if needed
      },
      scrollView: {
        flex: 1,
        right:'25%',
        top:'10%',
      },
      innerContainer: {
        padding: 20, // Adjust the padding as needed
      },
      buttonsContainerStart:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        left:'60%',
        bottom:'5%',
        alignItems: 'center',
      }
});