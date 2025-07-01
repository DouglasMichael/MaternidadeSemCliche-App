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




export default function ForgotPassword({navigation}: PropsScreensApp<'ForgotPassword'>) {

  const [Email, setemail] = useState("")
  const { toast } = useToast()
  const {login} = useAuth()

  async function SendEmail(){
    try{
      const response = await api.post("/esqueciSenha/enviarEmail", {
        to: Email,
      })
      
      if(response.status === 200){
        navigation.navigate("VerifyCode", {email: Email})
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
        <Text className="font-bold text-2xl text-[#ed967d]">Esqueceu a senha?</Text>
        <Text className="w-[80%] text-center font-medium text-xl text-[#70bac2]">Não se preocupe, você pode recuperar sua senha por aqui!</Text>
      </View>

      <View className="px-6 h-80 justify-between">
        <View className="gap-4">
          <Text className="text-[#ed967d]">Email</Text>
          <Input className={"border-[#ed967d]"} keyboardType="email-address" onChangeText={(text) => setemail(text)} value={Email} />
          <Text className="font-medium text-sm text-[#70bac2]">Você receberá um código de verificação no seu email em instantes. Verifique sua caixa de entrada e, caso não encontre, confira a pasta de spam. Insira o código recebido para continuar com o processo de verificação.</Text>
        </View>
        <View className="mb-5">
            <Button label="Enviar" size="lg" onPress={SendEmail}/>
        </View>

      </View>
    </ScrollView>
  );
}
