import { Text, StyleSheet } from 'react-native';

export const Paragraph = ({ align = 'center', text, style, ...rest }) => {
  return (
    <Text style={[styles.text, { textAlign: align }, style]} {...rest}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
    paddingHorizontal: 12,
  },
});