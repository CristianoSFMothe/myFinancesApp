import React, {createContext, useState} from 'react';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  const signUp = async (email, password, name) => {
    setLoadingAuth(true);

    try {
      const response = await api.post('/users', {
        email,
        password,
        name,
      });

      setLoadingAuth(false);

      navigation.goBack();
    } catch (err) {
      console.error('Error ao cadastrar', err);

      setLoadingAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
