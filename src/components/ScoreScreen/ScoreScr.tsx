import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

interface ScoreScreenProps {
  route: any; // Assuming the route prop is of any type for simplicity
  navigation: any;
}



const ScoreScr: React.FC<ScoreScreenProps> = ({ route,navigation }) => {
  const { teams } = route.params;

  const handleGoGame = () => {
    // Navigate back to the previous screen
    navigation.navigate('TimerScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Team Scores</Text>
      {teams.map((team: { name: string; score: number }, index: number) => (
        <View key={index} style={styles.teamContainer}>
          <Text style={styles.teamName}>{team.name}</Text>
          <Text style={styles.teamScore}>{team.score}</Text>
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