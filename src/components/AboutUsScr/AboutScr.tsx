import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';



const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');



const AboutScr: React.FC = () => {

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });


  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        window: windowDimensions,
        screen: screenDimensions,
      });
    };

    Dimensions.addEventListener('change', updateDimensions);

    return () => {
      // No need to remove the event listener
    };
  }, []);


  return (
    <View style={styles.container}>
    <ImageBackground
      source={require('../../../assets/Backgrounds/MnScr.png')}
      style={{
        ...styles.backgroundImage,
        width: dimensions.screen.width,
        height: dimensions.screen.height,
      }}
      resizeMode="cover"
    >
      <Text style={styles.label}>App created with lag xD</Text>

      <Text style={styles.header}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text key={key}>
          {key} - {value}
        </Text>
      ))}

      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text key={key}>
          {key} - {value}
        </Text>
      ))}
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#0B0F26',
  },
  label: {
    fontFamily: 'Eight-Bit-Dragon',
    fontSize: 10,
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default AboutScr;