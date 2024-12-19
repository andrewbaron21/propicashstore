import React from 'react'; 
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const AdminScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={{ uri: 'http://propicash.store' }} 
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101524',
  },
  webview: {
    flex: 1,
  },
});

export default AdminScreen;
