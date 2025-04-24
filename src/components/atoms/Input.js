import { TextInput, StyleSheet } from 'react-native';

export const Input = ({ style, ...rest }) => {
  return <TextInput style={[styles.input, style]} {...rest} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 20,
  },
});