import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AuthenticationButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginTop: 16, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 4, borderWidth: 1, borderColor: '#3498db' }}>
      <Text style={{ fontSize: 16, color: '#3498db', textTransform: 'uppercase', textAlign: 'center' }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthenticationButton;