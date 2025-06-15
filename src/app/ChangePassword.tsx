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




export default function ChangePassword({navigation}: PropsScreensApp<'ChangePassword'>) {

  const [senha, setSenha] = useState("")
  const { toast } = useToast()
  const {login} = useAuth()

  async function UpdatePassword(){
    navigation.navigate("Login")
    // try{
    //   const response = await api.post("/login", {
    //     senha: senha,
    //   })
      
    //   if(response.status === 200){
    //     const {accessToken, refreshToken } = response.data
    //     await login({accessToken, refreshToken})
    //   }
    // } catch (erro: unknown){
    //   if (axios.isAxiosError(erro)) {
    //     return toast(JSON.stringify(erro.response?.data.mensagem))
    //   }
    // }
  }

  return (
    <ScrollView className="flex-1 bg-[#F5EBE0]">
      <View className="items-center py-1">
        <Image source={require("../assets/Logo 1.png")}/>
      </View>
      <View className="items-center mb-12">
        <Text className="font-bold text-2xl text-[#ed967d]">Trocar senha</Text>
        <Text className="w-[80%] text-center font-medium text-xl text-[#70bac2]">Insira sua nova senha!</Text>
      </View>

      <View className="px-6 h-80 justify-between">
        <View className="gap-4">
           <Text className="text-[#ed967d]">Senha</Text>
          <Input secureTextEntry className={"border-[#ed967d]"} onChangeText={(text) => setSenha(text)} value={senha} />
        </View>
        <View className="gap-4">
           <Text className="text-[#ed967d]">Confirmar Senha</Text>
          <Input secureTextEntry className={"border-[#ed967d]"} onChangeText={(text) => setSenha(text)} value={senha} />
        </View>
        <View className="mb-5">
            <Button label="Cadastrar Nova Senha" size="lg" onPress={UpdatePassword}/>
        </View>

      </View>
    </ScrollView>
  );
}
