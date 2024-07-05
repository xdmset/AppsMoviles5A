import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AuthScreen from './screens/AuthScreen';
import AuthenticatedScreen from './screens/AuthenticatedScreen';
import { auth, signIn, signUp, signOutUser } from './services/authenticationService';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      if (user) {
        await signOutUser();
      } else {
        const authMethod = isLogin ? signIn : signUp;
        await authMethod(email, password);
      }
    } catch (error) {
      console.error("Authentication error: ", error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#f0f0f0' }}>
        {user ? (
          <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
        ) : (
          <AuthScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} isLogin={isLogin} setIsLogin={setIsLogin} handleAuthentication={handleAuthentication} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
} 