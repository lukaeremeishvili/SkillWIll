import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/landing.styles';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.logo}>SKillWill</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => alert('Home')}>
            <Text style={styles.navItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('About')}>
            <Text style={styles.navItem}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Contact')}>
            <Text style={styles.navItem}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.main}>
        <Text style={styles.heading}>Welcome to SKillWill</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          Cras venenatis euismod malesuada. Mauris non tempor quam, et lacinia sapien.
        </Text>
        <Text style={styles.paragraph}>
          Quisque ut dolor gravida, placerat libero vel, euismod. Proin at metus a urna commodo hendrerit. Nulla
          facilisi. Duis et justo sit amet ex semper convallis.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 SKillWill. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}
