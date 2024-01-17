import { StyleSheet } from 'react-native';

export const ConfigStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        width: 200, // Set the desired width
        fontFamily: 'Eight-Bit-Dragon',
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        width: 200, // Set the desired width
        fontFamily: 'Eight-Bit-Dragon',
      },
});