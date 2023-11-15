import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScr: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>App created with lag xD</Text>
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

export default AboutScr;