import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { Divider } from "../Components/Divider";
import { SocialMedia } from "../Components/SocialMedia";
import { EnterWith } from "@/Components/Enterwith";
import { PropsScreensApp } from "@/routes/interface";

export function Register({navigation}: PropsScreensApp<"Register">) {
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

      <View className="px-6 justify-evenly">
        <View className="gap-3">
          <Text className="text-[#ed967d]">Nome Completo</Text>
          <Input className="border-[#ed967d]" />
          <Text className="text-[#ed967d]">Tel(DDD)</Text>
          <Input className="border-[#ed967d]" />
          <Text className="text-[#ed967d]">Email</Text>
          <Input className="border-[#ed967d]" />
          <Text className="text-[#ed967d]">Senha</Text>
          <Input className="border-[#ed967d]" secureTextEntry />
          <Text className="text-[#ed967d]">Confirmar Senha</Text>
          <Input className="border-[#ed967d]" secureTextEntry />
        </View>
      </View>
      <View className="my-10 px-6">
        <Button label="Cadastar" size="lg" />
      </View>
      
      <TouchableOpacity className="mb-5 items-center" onPress={() => navigation.navigate("Login")}>
        <Text className="text-[#70BAC2]">já possui cadastro? Entre</Text>
      </TouchableOpacity>

      <Divider label="ou" />
      <EnterWith label={"Cadastre-se com:"}/>
    </ScrollView>
  );
}
