import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import AuthenticationButton from '../components/AuthenticationButton';

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}> {isLogin ? 'Sign In' : 'Sign Up'} </Text>
      {isLogin ? (
        <SignInForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleAuthentication={handleAuthentication} />
      ) : (
        <SignUpForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleAuthentication={() => handleAuthentication('signup')}
        />
      )}
      <AuthenticationButton text={isLogin ? "Need an account? Sign Up" : "Already have an account? Sign In"} onPress={() => setIsLogin(!isLogin)} />
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
});

export default AuthScreen;