import { StyleSheet } from 'react-native';

export const ScoreScrStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teamContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  teamName: {
    fontSize: 16,
    left:'1%',
  },
  teamScore: {
    fontSize: 14,
    left:'100%',
  },
  customImage: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginVertical: 5,
  },
});