import { jwtDecode } from "jwt-decode";
import { createContext, FC, useContext, useEffect, useState } from "react";

interface User {
    username: string;
}
interface AuthContextType {

    user: User | null;
    token: string | null;
    login:(token: string)=> void;
    logout: () => void;
    isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
            setToken(storedToken);
            try{
                const decodedUser = jwtDecode<User>(storedToken)
                setUser(decodedUser);
            } catch {
                setUser(null);
            }
        }}, []);

    const login = (token: string) => {
        localStorage.setItem("authToken", token);
        setToken(token);
        const decodedUser = jwtDecode<User>(token);
        setUser(decodedUser);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setUser(null);
        setToken(null);
    };

    const isAuthenticated = () => {
        return !!token;
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};