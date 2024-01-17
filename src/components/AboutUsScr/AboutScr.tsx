import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const AboutScr: React.FC = () => {
  return (
    <View style={styles.container}>
       <ImageBackground
        source={require('../../../assets/Backgrounds/MnScr.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      <Text style={styles.label}>App created with lag xD</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  label: {
      fontFamily: 'Eight-Bit-Dragon',
      fontSize: 10,
  },
});

export default AboutScr;