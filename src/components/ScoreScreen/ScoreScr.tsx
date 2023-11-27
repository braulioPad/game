import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ScoreScreenProps {
  navigation: any;
}

const ScoreScr: React.FC<ScoreScreenProps> = ({ navigation }) => {
  const [teamsData, setTeamsData] = useState<any>(null);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('TeamData');
        console.log(storedData);

        if (storedData !== null) {
          const parsedData = JSON.parse(storedData);
          setTeamsData(parsedData);
        } else {
          console.log('No Data');
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    fetchTeamsData();
  }, []);

  const handleGoGame = () => {
    // Navigate back to the previous screen
    navigation.navigate('CardSelectScr');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team Scores</Text>
      {teamsData &&
        Object.keys(teamsData).map((teamName) => (
          <View key={teamName} style={styles.teamContainer}>
            <Text style={styles.teamName}>{teamName}</Text>
            <Text style={styles.teamScore}>Score: {teamsData[teamName].Score}</Text>
          </View>
        ))}
      <Button title="Next player" onPress={handleGoGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamName: {
    fontSize: 18,
    marginRight: 10,
  },
  teamScore: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScoreScr;
