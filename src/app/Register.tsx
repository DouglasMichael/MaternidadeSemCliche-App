import { Image, ScrollView, Text, View } from "react-native";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { Or } from "../Components/Or";
import { SocialMedia } from "../Components/SocialMedia";

export function Register() {
  return (
    <ScrollView className="flex-1 bg-[#F5EBE0]">
      <View className="pt-7 items-center">
        <Image
          source={require("../assets/Logo 2.png")}
          resizeMode="contain"
          className="w-[90%]"
        />
      </View>

      <View className="items-center mb-12">
        <Text className="font-bold text-2xl text-[#ed967d]">
          Criar nova conta:
        </Text>
        <Text className="font-medium text-xl text-center w-[90%] text-[#70bac2]">
          Venha fazer parte dessa linda rede de apoio a mulheres!
        </Text>
      </View>

      <View className="px-6 h-60 justify-evenly">
        <View className="gap-3">
          <Text className="text-[#ed967d]">Nome Completo</Text>
          <Input />
          <Text className="text-[#ed967d]">Tel(DDD)</Text>
          <Input />
          <Text className="text-[#ed967d]">Email</Text>
          <Input />
          <Text className="text-[#ed967d]">Senha</Text>
          <Input secureTextEntry />
          <Text className="text-[#ed967d]">Confirmar Senha</Text>
          <Input secureTextEntry />
        </View>

        <View className="my-12">
          <Button label="Cadastar" size="lg" />
        </View>

        <Or />
        <SocialMedia />
      </View>
    </ScrollView>
  );
}
