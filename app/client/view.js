import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router'; // Importamos useSearchParams de expo-router

const ClientViewScreen = () => {
  const { fqdn } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={{ uri: `http://${fqdn}` }} 
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

export default ClientViewScreen;
