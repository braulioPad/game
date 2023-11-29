
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConfigScreen from './src/components/ConfigurationScreen/ConfigScreen';
import MainMenu from './src/components/MainMenu/MainMenu';
import About from './src/components/AboutUsScr/AboutScr';
import TeamScr from './src/components/TeamScreen/TeamScr';
import TeamsListScreen from './src/components/TeamListScreen/TeamsListScreen';
import GameScr from './src/components/GameScreen/GameScr';
import ScoreScr from './src/components/ScoreScreen/ScoreScr';
import CardSelectScr from './src/components/CardSelection/CardSelectScr';
import EditTeamScr from './src/components/EditTeamScreen/EditTeamScr';
const Stack = createStackNavigator();

const App: React.FC = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainMenu} options={{ headerShown: false }} />
        <Stack.Screen name="configuration" component={ConfigScreen} />
        <Stack.Screen name="aboutUs" component={About} />
        <Stack.Screen name="TeamScr" component={TeamScr} options={{ headerShown: true }} />
        <Stack.Screen name="ScoreScr" component={ScoreScr} options={{ headerShown: false }} />

        <Stack.Screen name="EditTeamScr" component={EditTeamScr as React.FC} options={{ headerShown: false }} />
        <Stack.Screen
          name="TeamsListScreen"
          component={TeamsListScreen as React.FC} options={{ headerShown: false }} />
        <Stack.Screen name="TimerScreen" component={GameScr} options={{ headerShown: false }} />
        <Stack.Screen name="CardSelectScr" component={CardSelectScr} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;