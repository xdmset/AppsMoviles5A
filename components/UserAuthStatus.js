import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const UserAuthStatus = ({ user, handleAuthentication }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 20 }}> WELCOME! </Text>
      <Text style={{ fontSize: 16, textAlign: 'center' }}> {user.email} </Text>
      <TouchableOpacity onPress={handleAuthentication} style={{ marginTop: 16, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#e74c3c', borderRadius: 4 }}>
        <Text style={{ fontSize: 16, color: '#fff', textTransform: 'uppercase', textAlign: 'center' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserAuthStatus;