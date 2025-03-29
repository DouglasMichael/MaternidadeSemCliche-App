import { Image, ScrollView, Text, View } from "react-native";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { Divider } from "../Components/Divider";
import { SocialMedia } from "../Components/SocialMedia";

export function Login() {
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
          <Input />
          <Text className="text-[#ed967d]">Password</Text>
          <Input secureTextEntry />
        </View>

        <View className="my-12">
            <Button label="Entrar" size="lg"/>
        </View>

        <Divider label="Ou"/>
        <SocialMedia/>
      </View>
    </ScrollView>
  );
}
