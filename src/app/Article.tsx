import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";

export function Article() {
  return (
    <ScrollView className="flex-1 bg-[#70BAC2]">
      <Header />
      <Text className="text-center font-bold text-2xl text-white mb-10">
        Artigos importantes
      </Text>
      <View className="flex items-center gap-11">
        <TouchableOpacity className="w-96 h-60 bg-[#F5EBE0] rounded-3xl flex-row">
          <View className="w-1/2 items-center justify-center">
            <ImageBackground
              source={require("../assets/Card5.png")}
              resizeMode="cover"
              className="flex-1 w-full rounded-full"
            />
          </View>
          <View className="w-1/2 p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center">
              Familia
            </Text>
            <Text className="font-bold text-sm text-justify">
              Descubra no nosso artigo como fortalecer os laços familiares e
              criar uma base sólida de amor e conexão.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-96 h-60 bg-[#F5EBE0] rounded-3xl flex-row">
          <View className="w-1/2 items-center justify-center">
            <ImageBackground
              source={require("../assets/Card6.png")}
              resizeMode="cover"
              className="flex-1 w-full rounded-full"
            />
          </View>
          <View className="w-1/2 p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center">
              Inseguranças
            </Text>
            <Text className="font-bold text-sm text-center">
              Explore como compreender e superar as inseguranças femininas para
              conquistar autoconfiança e empoderamento.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-96 h-60 bg-[#F5EBE0] rounded-3xl flex-row">
          <View className="w-1/2 items-center justify-center">
            <ImageBackground
              source={require("../assets/Card7.png")}
              resizeMode="cover"
              className="flex-1 w-full rounded-full"
            />
          </View>
          <View className="w-1/2 p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center">
              Mudança
            </Text>
            <Text className="font-bold text-sm text-center">
              O artigo revela como abraçar as mudanças como oportunidades de
              crescimento e transformação pessoal.
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
