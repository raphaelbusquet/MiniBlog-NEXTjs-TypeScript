import { useState, useEffect, useContext, createContext, FC } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '../firebase/config';

interface User {
  user: string;
  password: string;
  prevState: null | undefined | boolean
}

interface AuthContextProps {
  user: User | null;
}

export const AuthContext = createContext<AuthContextProps>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: JSX.Element
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(firebase_app), user => {
      if (user) {
        setUser({
          user: user.email as string,
          password: '',
          prevState: null
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
