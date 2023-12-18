import { StyleSheet } from 'react-native';

export const ConfigStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slider: {
        width: 200,
        marginVertical: 10,
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
      },
      durationText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      centeredDropdownContainer: {
        alignItems: 'center', // Align the dropdown to the center
      },
});