import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const SignUpForm = ({ email, setEmail, password, setPassword, handleAuthentication }) => {
  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, marginVertical: 10, width: '100%', borderRadius: 4 }}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, marginVertical: 10, width: '100%', borderRadius: 4 }}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => handleAuthentication('signup')} style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#2ecc71', borderRadius: 4 }}>
        <Text style={{ fontSize: 16, color: '#fff', textTransform: 'uppercase', textAlign: 'center' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;