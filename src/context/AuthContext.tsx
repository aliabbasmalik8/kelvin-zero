import React, {createContext, useState, FC, ReactNode} from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
interface IAuthProvider {
  children: ReactNode;
}
export const AuthProvider: FC<IAuthProvider> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  const login = (userEmail: string) => {
    setEmail(userEmail);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setEmail(null);
    setIsLoggedIn(false);
  };

  const contextValue: AuthContextType = {
    isLoggedIn,
    email,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
