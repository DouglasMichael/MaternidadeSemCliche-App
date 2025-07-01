import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { Divider } from "../Components/Divider";
import { SocialMedia } from "../Components/SocialMedia";
import { useNavigation } from "@react-navigation/native";
import { PropsScreensApp } from "@/routes/interface";
import { EnterWith } from "@/Components/Enterwith";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useToast } from "@/Components/Toast";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";




export default function Login({navigation}: PropsScreensApp<'Login'>) {

  const [Email, setemail] = useState("")
  const [Senha, setsenha] = useState("")
  const { toast } = useToast()
  const {login} = useAuth()

  async function Login(){
    try{
      const response = await api.post("/login", {
        email: Email,
        senha: Senha
      })
      
      if(response.status === 200){
        const {accessToken, refreshToken } = response.data
        await login({accessToken, refreshToken})
      }
    } catch (erro: unknown){
      if (axios.isAxiosError(erro)) {
        return toast(JSON.stringify(erro.response?.data.mensagem))
      }
    }
  }

  return (
    <ScrollView className="flex-1 bg-[#F5EBE0]">
      <View className="items-center py-1">
        <Image source={require("../assets/Logo 1.png")}/>
      </View>
      <View className="items-center mb-12">
        <Text className="font-bold text-2xl text-[#ed967d]">Bem vindo de volta!</Text>
        <Text className="font-medium text-xl text-[#70bac2]">Login para continuar</Text>
      </View>

      <View className="px-6 h-60 justify-evenly">
        <View className="gap-4">
          <Text className="text-[#ed967d]">Email</Text>
          <Input className={"border-[#ed967d]"} keyboardType="email-address" onChangeText={(text) => setemail(text)} value={Email} />
          <Text className="text-[#ed967d]">Password</Text>
          <Input secureTextEntry className={"border-[#ed967d]"} onChangeText={(text) => setsenha(text)} value={Senha} />
        </View>
        <TouchableOpacity className="items-end" onPress={() => navigation.navigate("ForgotPassword")}>
          <Text className="text-[#70BAC2]">Esqueceu a senha? Clique aqui</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center mt-10 mb-5" onPress={() => navigation.navigate("Register")}>
          <Text className="text-[#70BAC2]">Primeiro Acesso? Registre-se</Text>
        </TouchableOpacity>
        

        <View className="mb-5">
            <Button label="Entrar" size="lg" onPress={Login}/>
        </View>

        <Divider label="Ou"/>
        <EnterWith label={"Fazer login com:"}/>
      </View>
    </ScrollView>
  );
}
