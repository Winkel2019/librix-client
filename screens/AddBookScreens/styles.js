import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 30,
    fontSize: 20,
  },
  label: {
    marginLeft: 50,
    marginBottom: 5,
    marginTop: 20,
  },
  isbnInput: {
    width: 270,
    marginRight: 5,
  },
  inputText: {
    marginHorizontal: 40,
    padding: Platform.OS === 'ios' ? 15 : 10,
    backgroundColor: colors.white,
    borderRadius: 40,
    shadowRadius: 7,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  noteText: {
    height: 100,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 10,
    width: 370,
  },
  formContainer: {
    width: 400,
  },
  or: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  smallButton: {
    backgroundColor: colors.primary.dark,
    borderRadius: 15,
    width: '12%',
    padding: 10,
    alignSelf: 'center',
  },
  button: {
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  upload: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  uploadButtton: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  uploadText: {
    color: colors.white,
    marginRight: 10,
  },
  backgroundDrop: {
    backgroundColor: colors.primary.light,
    elevation: 4,
  },
  picker: {
    borderColor: 'transparent',
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: colors.white,
    shadowRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  pickerContainer: {
    marginHorizontal: 20,
  },
  main: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
    marginTop: 5,
  },
});

export default styles;
