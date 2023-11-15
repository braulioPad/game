import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TeamScr from '../TeamScreen/TeamScr';

const MainMenu: React.FC<{ navigation: any }> = ({ navigation }) => {
  const goToConfig = () => {
    navigation.navigate('configuration');
  };
  const goToAboutUs = () => {
   navigation.navigate('aboutUs');
  };
  const goToPlay = () => {
   navigation.navigate('TeamsListScreen');
  };


  return (
    <View style={styles.container}>
      <Button title="Play" onPress={goToPlay}/>
      <Button title="Configuration" onPress={goToConfig} />
      <Button title="About us" onPress={goToAboutUs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainMenu;