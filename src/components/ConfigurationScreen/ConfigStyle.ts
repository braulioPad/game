import { StyleSheet } from 'react-native';

export const ConfigStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slider: {
        width: 300,
        marginVertical: 10,
        height: 40,
        borderWidth: 2,
        borderColor: 'black', 
      },
      label: {
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 16,
        marginBottom: 5,
 
      },
      durationText: {
        fontFamily: 'Eight-Bit-Dragon',
        fontSize: 14,
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
      saveBtn: {
        padding: 6,
        alignItems: 'center', 
      },
      buttonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Eight-Bit-Dragon',
        letterSpacing: 1, 
      },
      centeredDropdownContainer:{
        fontFamily: 'Eight-Bit-Dragon',
      },
      containerSelect:{
        width: '100%',
        justifyContent: 'space-around',
        alignContent:'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      },
      containerSelectLeft:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent:'space-around',
        alignItems: 'left',
        lineHeight: 30, 
        width: '55%',
      },
      containerSelectRight:{
        width: '30%',
        flexDirection: 'column',

      }
});