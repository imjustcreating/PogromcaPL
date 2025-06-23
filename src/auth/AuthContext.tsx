import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "./types";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const demoUser: User = { email: "test@demo.pl" };

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    if (email === "test@demo.pl" && password === "demo123") {
      setUser(demoUser);
      return true;
    }
    // Tu można podłączyć backend
    return false;
  };

  const register = (email: string, password: string) => {
    // Tu można dodać backendowe rejestrowanie
    setUser({ email });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext not found");
  return ctx;
}