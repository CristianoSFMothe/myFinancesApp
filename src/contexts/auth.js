import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    nome: 'Cristiano Text',
  });

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
