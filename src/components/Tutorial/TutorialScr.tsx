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
        <View style={styles.page} key="1">
          <Image source={require('../../../assets/btns/easy.png')} style={styles.slideImage} />
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Image source={require('../../../assets/btns/mid.png')} style={styles.slideImage} />
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Image source={require('../../../assets/btns/hard.png')} style={styles.slideImage} />
          <Text>Third page</Text>
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