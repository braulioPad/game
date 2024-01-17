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
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 16,
        marginBottom: 5,
      },
      durationText: {
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 20,
      },
      centeredDropdownContainer: {
        alignItems: 'center', // Align the dropdown to the center
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
});