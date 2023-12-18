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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
      },
      teamContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
    
      // Style for the editable area displaying team name
      teamNameInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 10,
      },
    
      // Style for the general input (for adding new team name)
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 10,
      },
      text:{
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 10,
      },
});