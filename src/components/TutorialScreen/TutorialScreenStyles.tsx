import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperContainer: {
    flex: 1,
  },
  slideContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  continueButtonText: {
    color: 'white',
  },
  checkbox: {
    margin: 8,
  },
  viewPager: {
    flex: 1,
  },
  slideImage: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});