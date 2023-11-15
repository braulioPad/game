// TimerScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Countdown from 'react-native-countdown-component';

// Import the local JSON data
import jsonData from 'Data/en_card.json';

interface TimerScreenProps {
  navigation: any; // Assuming the navigation prop is of any type for simplicity
}

const GameScr: React.FC<TimerScreenProps> = ({ navigation }) => {
  const [jsonData, setJsonData] = useState<any>(null);

  useEffect(() => {
    // Load local JSON data
    setJsonData(jsonData);
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Countdown
        until={60} // Set the countdown duration in seconds
        size={30}
        onFinish={() => console.log('Countdown finished')}
        digitStyle={{ backgroundColor: '#FFF' }}
        digitTxtStyle={{ color: '#1CC625' }}
        timeToShow={['M', 'S']}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />
      {jsonData && (
        <View>
          <Text>Loaded JSON Data:</Text>
          <Text>{JSON.stringify(jsonData, null, 2)}</Text>
        </View>
      )}
      <Button title="Go Back" onPress={handleGoBack} />
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

export default GameScr;