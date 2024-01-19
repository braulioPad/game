import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './TutorialScreenStyles';
import PagerView from 'react-native-pager-view';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface ConfigScrProps {
  navigation: any;
}
const TutorialScreen: React.FC<ConfigScrProps> = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleContinue = () => {
    console.log('saving Data: ' + JSON.stringify(isChecked));
    AsyncStorage.setItem('skipTutorial', JSON.stringify(isChecked));
    navigation.navigate('CardSelectScr');
  };

  const onPageSelected = (e: any) => {
    setCurrentPage(e.nativeEvent.position);
  };


  return (
    <View style={styles.container}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.instructionsContainer} key="1">
          <Text style={styles.instructionsHeader}>How to Play:</Text>
          <Text style={styles.instructionText}>* Form two or more teams, depending on the number of players.</Text>
          <Text style={styles.instructionText}>* In each round, one player will be the "mimer" who tries to convey a sound using only their mouth.</Text>
          <Text style={styles.instructionText}>* The mimer selects a sound word (e.g., animal noise, object sound, musical instrument) without revealing it to the other players.</Text>
          <Text style={styles.instructionText}>* Teams have a limited time to discuss and make their guess.</Text>
        </View>
        <View style={styles.page} key="2">
          <Image source={require('../../../assets/tutorialImg/instruction1.png')} style={styles.slideImage} />
          <Text>you can't make any move your body or your hands, only with the mouth.</Text>
        </View>
        <View style={styles.page} key="3">
          <Image source={require('../../../assets/tutorialImg/instruction2.png')} style={styles.slideImage} />
          <Text>Click to the left to skip the word.</Text>
        </View>
        <View style={styles.page} key="4">
          <Image source={require('../../../assets/tutorialImg/instruction3.png')} style={styles.slideImage} />
          <Text>Click to the right the teams player say the rigth word.</Text>
        </View>
      </PagerView>
      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text> Dont show again </Text>
      </View>
      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: '#4CAF50' }]}
        onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TutorialScreen;