import { SafeAreaView, StyleSheet } from 'react-native';
import { Logo } from "../index";

export function LayoutDefault({children, LayoutLogo = Logo}) {
  return (
    <SafeAreaView style={styles.container}>
      <LayoutLogo />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 40,
  }
});
