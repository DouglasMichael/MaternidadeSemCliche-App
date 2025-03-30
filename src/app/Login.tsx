import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { Divider } from "../Components/Divider";
import { SocialMedia } from "../Components/SocialMedia";
import { useNavigation } from "@react-navigation/native";
import { PropsScreensApp } from "@/routes/interface";
import { EnterWith } from "@/Components/Enterwith";




export default function Login({navigation}: PropsScreensApp<'Login'>) {

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
          <Input className={"border-[#ed967d]"} />
          <Text className="text-[#ed967d]">Password</Text>
          <Input secureTextEntry className={"border-[#ed967d]"} />
        </View>
        <TouchableOpacity className="items-end">
          <Text className="text-[#70BAC2]">Esqueceu a senha? Clique aqui</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center mt-10 mb-5" onPress={() => navigation.navigate("Register")}>
          <Text className="text-[#70BAC2]">Primeiro Acesso? Registre-se</Text>
        </TouchableOpacity>
        

        <View className="mb-5">
            <Button label="Entrar" size="lg" onPress={() => navigation.navigate("Home")}/>
        </View>

        <Divider label="Ou"/>
        <EnterWith label={"Fazer login com:"}/>
      </View>
    </ScrollView>
  );
}
