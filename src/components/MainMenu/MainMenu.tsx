import React, { useCallback, useEffect, useState } from 'react';
import { View, ImageBackground, Text, Image, BackHandler,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CustomButton from '../CustomBtn/CustomButton';
import { MainMenuStyles as styles } from './MainMenuStyles';

SplashScreen.preventAutoHideAsync();

const MainMenu: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Eight-Bit-Dragon': require('../../../assets/fonts/Eight-Bit-Dragon.ttf'),
  });
  const [configLoaded, setConfigLoaded] = useState(false);
  const [isChecked, setChecked] = useState(false);
  StatusBar.setHidden(true, 'none');
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, []);
  const loadConfigData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('ConfigData');
      if (storedData === null) {
        const updatedConfigData = {
          seconds: 60,
          slcLanguage: 'Eng',
        };
        const skipTuto = await AsyncStorage.getItem('skipTutorial');
        console.log("tutorial: " + skipTuto);
        if (skipTuto === null) {
          setChecked(false);
        } else {
          setChecked(true);
        }
        console.log('saving Data: ' + JSON.stringify(updatedConfigData));
        await AsyncStorage.setItem('ConfigData', JSON.stringify(updatedConfigData));
        await AsyncStorage.setItem('skipTutorial', JSON.stringify(isChecked));
      }
      setConfigLoaded(true);
    } catch (error) {
      console.error('Error loading ConfigData:', error);
    }
  };


  
  useEffect(() => {
    SplashScreen.hideAsync(); // hide the splashscreen
    loadConfigData();
  }, []);

  const goToConfig = () => {
    navigation.navigate('configuration');
  };

  const goToAboutUs = () => {
    navigation.navigate('aboutUs');
  };

  const goToPlay = () => {
    navigation.navigate('TeamsListScreen');
  };

  const goToInfo = () => {

  };

  if (!fontsLoaded || !configLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
    <StatusBar hidden={true} />
      <ImageBackground
        source={require('../../../assets/Backgrounds/MnScr.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.mainContainer}>
          <View style={styles.elementorLeft}>
            <View style={styles.elementorLeft}>
              <Image source={require('../../../assets/Backgrounds/gamename.png')} style={styles.gameName} />
              <Image source={require('../../../assets/Backgrounds/maintype.png')} style={styles.mainType} />
            </View>
            {/* nav Button */}
            <View style={styles.mainmenu}>
              {/* Play Button */}
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Go Play</Text>
                <CustomButton
                  onPress={goToPlay}
                  imageSource={require('../../../assets/btns/menubtn.png')}
                  pressedImageSource={require('../../../assets/btns/menubtn2.png')}
                  imageStyle={styles.customImage} />
              </View>
              {/* Play Button */}
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>    Info</Text>
                <CustomButton
                  onPress={goToInfo}
                  imageSource={require('../../../assets/btns/menubtn.png')}
                  pressedImageSource={require('../../../assets/btns/menubtn2.png')}
                  imageStyle={styles.customImage} />
              </View>
              {/* Config Button */}
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Config</Text>
                <CustomButton
                  onPress={goToConfig}
                  imageSource={require('../../../assets/btns/menubtn.png')}
                  pressedImageSource={require('../../../assets/btns/menubtn2.png')}
                  imageStyle={styles.customImage} />
              </View>
              {/* About Us Button */}
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>About Us</Text>
                <CustomButton
                  onPress={goToAboutUs}
                  imageSource={require('../../../assets/btns/menubtn3.png')}
                  pressedImageSource={require('../../../assets/btns/menubtn4.png')}
                  imageStyle={styles.customImage} />
              </View>
            </View>
          </View>
          <View style={styles.elementor}>
            <Image source={require('../../../assets/Backgrounds/Horn.png')} style={{ width: 280, marginRight: 20, resizeMode: 'contain', }} />
            {/* Play Button */}
            <View style={styles.buttonContainerPlay}>
              <Text style={styles.buttonText}>just Play</Text>
              <CustomButton
                onPress={goToPlay}
                imageSource={require('../../../assets/btns/btns_5.png')}
                pressedImageSource={require('../../../assets/btns/btns_6.png')}
                imageStyle={styles.customImage} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


export default MainMenu;