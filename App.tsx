import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConfigScreen from './src/components/ConfigurationScreen/ConfigScreen';
import MainMenu from './src/components/MainMenu/MainMenu';
import About from './src/components/AboutUsScr/AboutScr';
import TeamScr from './src/components/TeamScreen/TeamScr';
import TeamsListScreen from './src/components/TeamListScreen/TeamsListScreen';
import GameScr from './src/components/GameScreen/GameScr';
import ScoreScr from './src/components/ScoreScreen/ScoreScr';
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainMenu} options={{ headerShown: false }}/>
        <Stack.Screen name="configuration" component={ConfigScreen} />
        <Stack.Screen name="aboutUs" component={About} />
        <Stack.Screen name="TeamScr" component={TeamScr} options={{ headerShown: true }} />
        <Stack.Screen name="ScoreScr" component={ScoreScr} options={{ headerShown: true }} />
        <Stack.Screen
          name="TeamsListScreen"
          component={TeamsListScreen as React.FC}/>
          <Stack.Screen name="TimerScreen" component={GameScr} options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;