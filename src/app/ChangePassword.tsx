import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { PropsScreensApp } from "@/routes/interface";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useToast } from "@/Components/Toast";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";




export default function ChangePassword({navigation, route}: PropsScreensApp<'ChangePassword'>) {
  const {email} = route.params
  const [Senha, setSenha] = useState("")
  const [ConfirmSenha, setConfirmSenha] = useState("")
  const { toast } = useToast()
  const {login} = useAuth()

  async function UpdatePassword(){
    try{

      if (Senha !== ConfirmSenha || !Senha || !ConfirmSenha) {
        return toast("As senhas não conferem");
      }

      const response = await api.put("/esqueciSenha/redefinirSenha", {
        email: email,
        novaSenha: Senha
      })

      if(response.status === 200){
        const LoginNovaSenha = await api.post("/login", {
                email: email,
                senha: Senha
              })
              
              if(LoginNovaSenha.status === 200){
                console.log("AQUIII")
                const {accessToken, refreshToken } = LoginNovaSenha.data
                await login({accessToken, refreshToken})
              }
        return toast(JSON.stringify(response.data.mensagem), "success")
      }

    } catch (erro: unknown){
      if (axios.isAxiosError(erro)) {
        console.log(erro.response)
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
        <Text className="font-bold text-2xl text-[#ed967d]">Trocar senha</Text>
        <Text className="w-[80%] text-center font-medium text-xl text-[#70bac2]">Insira sua nova senha!</Text>
      </View>

      <View className="px-6 h-80 justify-between">
        <View className="gap-4">
           <Text className="text-[#ed967d]">Senha</Text>
          <Input secureTextEntry className={"border-[#ed967d]"} onChangeText={(text) => setSenha(text)} value={Senha} />
        </View>
        <View className="gap-4">
           <Text className="text-[#ed967d]">Confirmar Senha</Text>
          <Input secureTextEntry className={"border-[#ed967d]"} onChangeText={(text) => setConfirmSenha(text)} value={ConfirmSenha} />
        </View>
        <View className="mb-5">
            <Button label="Cadastrar Nova Senha" size="lg" onPress={UpdatePassword}/>
        </View>

      </View>
    </ScrollView>
  );
}
