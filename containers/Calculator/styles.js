import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
  },
  inputField: {
    height: 200,
  },
  saved: {
    flex: 1,
    fontSize: 30,
    color: 'grey',
    paddingTop: 30,
  },
  input: {
    flex: 1,
    fontSize: 40,
    paddingTop: 15,
    paddingBottom: 30,
  },
  buttons: {
    height: 400,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#f0f0f0',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
