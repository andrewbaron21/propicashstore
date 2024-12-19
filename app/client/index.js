import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Importar useRouter desde expo-router

const ClientScreen = () => {
  const [number, setNumber] = useState('');
  const [fqdn, setFqdn] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Usar el hook useRouter para navegación

  const fetchFqdn = async () => {
    try {
      const response = await fetch(`http://propicash.store/api/get-fqdn/${number}`);
      const data = await response.json();
      if (response.ok) {
        setFqdn(data.fqdn);
        setError('');
      } else {
        setFqdn('');
        setError(data.error);
      }
    } catch (err) {
      setFqdn('');
      setError('Error al conectar con la API');
    }
  };

  const handleNavigate = () => {
    if (fqdn) {
      // Usamos router.push para navegar a /client/view con fqdn como parámetro
      router.push(`/client/view?fqdn=${fqdn}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultar su URL</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el RUC"
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={fetchFqdn}>
        <Text style={styles.buttonText}>Consultar</Text>
      </TouchableOpacity>

      {fqdn ? (
        <TouchableOpacity
          style={[styles.button, styles.clientButton]}
          onPress={handleNavigate}
        >
          <Text style={styles.buttonText}>Entrar a {fqdn}</Text>
        </TouchableOpacity>
      ) : null}

      {fqdn ? <Text style={styles.result}>URL: {fqdn}</Text> : null}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101524',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007bff',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#007bff',
  },
  error: {
    marginTop: 20,
    fontSize: 16,
    color: '#ff0000',
  },
});

export default ClientScreen;
