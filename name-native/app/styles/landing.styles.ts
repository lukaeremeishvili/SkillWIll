import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 16,
  },
  main: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    lineHeight: 22,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});

export default styles;
