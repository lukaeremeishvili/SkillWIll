import { View, Text, StyleSheet } from 'react-native';

export default function Communities() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Communities Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    color: '#dff7e8',
    fontSize: 20
  }
});
