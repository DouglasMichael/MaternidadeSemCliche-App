import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../Components/Header";
import { Divider } from "../Components/Divider";
import { SocialMedia } from "../Components/SocialMedia";
import { PropsScreensApp } from "@/routes/interface";

export function Community({navigation}: PropsScreensApp<"Community">) {
  return (
      <ScrollView className="flex-1 bg-[#FFCDB2]">
        <Header />
        <ImageBackground
          source={require("../assets/Card2.png")}
          className="w-full h-80 rounded-l-3xl mb-9"
        />
        <View className="items-center mb-6">
          <View className="w-96 h-96 bg-[#ED967D] items-center rounded-lg">
            <Text className="text-white font-bold text-base text-center p-6">
              A maternidade é uma jornada cheia de momentos incríveis, mas
              também pode trazer desafios que parecem pesados demais para
              carregar sozinha. Unir-se a grupos de apoio, como os nossos no
              WhatsApp e Instagram, fortalece, compartilha experiências e
              transforma dificuldades em aprendizado. Aqui, você encontrará um
              espaço acolhedor para trocar ideias, tirar dúvidas e se apoiar com
              outras mães que estão passando pelas mesmas experiências. Não
              enfrente a maternidade sozinha—venha se juntar a nós e crescer
              juntas nessa caminhada!
            </Text>
          </View>
        </View>

        <Divider label="Nossas comunidades" />
        <SocialMedia />
      </ScrollView>
  );
}
