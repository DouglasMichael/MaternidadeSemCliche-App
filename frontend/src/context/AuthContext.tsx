import React, { createContext, useContext, useState, useEffect, ReactNode, Children } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin} from "@react-native-google-signin/google-signin";
import axios from "axios";
import api from "@/lib/api";


type user ={
    nome: string;
    email: string;
    user_id: string;
    telefone: string;
    picture?: string
}

type AuthContextType = {
    user: user | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (tokens: {accessToken: string, refreshToken: string}) => Promise<void>
    loginWithGoogle: (tokenGoogle: string | null) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<user | null>(null);
    const [loading, setLoading] = useState(true);   

    
    const isAuthenticated = !!user;

    useEffect(() =>{
        async function checkToken() {
            const accessToken = await AsyncStorage.getItem("accessToken")
            const refreshToken = await AsyncStorage.getItem("refreshToken")
            const tokenGoogle = await AsyncStorage.getItem("tokenGoogle")

            if (accessToken && refreshToken) {
                try{
                    const response = await api.post("/token", {
                        accessToken:accessToken,
                        refreshToken: refreshToken
                    })

                    setUser(response.data.user)
                } catch (error){
                    await AsyncStorage.removeItem("accessToken")
                    await AsyncStorage.removeItem("refreshToken")

                    setUser(null)
                }
            } else if (tokenGoogle) {
                try{
                    const response = await api.post("/tokenGoogle", {
                        tokenID: tokenGoogle
                    })

                    setUser(response.data.user)
                } catch (error){
                    await AsyncStorage.removeItem("tokenGoogle")
                    
                    setUser(null)
                }
            }
            setLoading(false)
        }
        checkToken()
        console.log(user?.picture)
    },[])

    async function login(tokens:{accessToken: string, refreshToken: string}) {
        const { accessToken, refreshToken } = tokens;

        await AsyncStorage.setItem('accessToken', accessToken)
        await AsyncStorage.setItem('refreshToken', refreshToken)

        const response = await api.post("/token", {
            accessToken:accessToken,
            refreshToken: refreshToken
        })

        setUser(response.data.user)
    }

    async function loginWithGoogle(tokenGoogle: string | null){
        if (tokenGoogle !== null) {
            await AsyncStorage.setItem('tokenGoogle', tokenGoogle)
        }

        const response = await api.post("/tokenGoogle", {
            tokenID: tokenGoogle
        })

        setUser(response.data.user)
    }

    async function logout() {
        await AsyncStorage.removeItem('accessToken')
        await AsyncStorage.removeItem('refreshToken')
        await AsyncStorage.removeItem('tokenGoogle')
        await GoogleSignin.signOut()
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, isAuthenticated, loading, login, loginWithGoogle, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth precisa estar dentro do AuthProvider");
    return context;
  }