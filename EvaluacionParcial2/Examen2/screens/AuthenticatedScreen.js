import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserAuthStatus from '../components/UserAuthStatus';
import { signOutUser } from '../services/authenticationService';

const AuthenticatedScreen = ({ user, setUser }) => {
  const handleAuthentication = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <UserAuthStatus user={user} handleAuthentication={handleAuthentication} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default AuthenticatedScreen;