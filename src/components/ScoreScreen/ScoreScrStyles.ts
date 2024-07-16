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
    fontFamily: 'Eight-Bit-Dragon',
  },
 /*  teamContainer: {
    marginBottom:4,
    flexDirection: 'row',
    alignItems: 'center',
  }, */
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
  text:{
    color: 'white',
    fontFamily: 'Eight-Bit-Dragon',
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
    backgroundColor: '#2196F3',
    alignItems: 'center',
    marginVertical: 5,
  },
  contentGap:{
    flexDirection: 'row',
    alignContent: 'space-around',
    width:'85%',
    alignItems: 'center',
  },
  contentGrow:{
    flexGrow: 8,
    flexBasis: 200,
    marginLeft:50,
  },
  contentGrowsnd:{
    flexGrow: 3,
    flexBasis: 120,
  },
  teamBtns: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'space-around',
    width:'55%',
  },
  teamContainer:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentlsits:{
    borderBottomWidth: 1,
    borderColor: 'black',
    width:'60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 30, 
    alignItems: 'center',
  },
  PressNo:{
    fontFamily: 'Eight-Bit-Dragon',
    backgroundColor: '#d41a3d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  
});