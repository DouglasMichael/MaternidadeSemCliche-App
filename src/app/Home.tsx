import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, AvatarImage } from "../Components/Avatar";

export function Home() {
  return (
    <ScrollView className="flex-1 bg-[#F5EBE0] ">
      <View className="pt-10 flex-row justify-around mb-10">
        <Image
          source={require("../assets/Logo 3.png")}
          resizeMode="contain"
          className="w-[80%]"
        />
        <Avatar>
          <AvatarImage
            source={{
              uri: "https://pbs.twimg.com/profile_images/1745949238519803904/ZHwM5B07_400x400.jpg",
            }}
          />
        </Avatar>
      </View>
      <View className="flex items-center gap-11">
        <TouchableOpacity className="w-96 h-44 bg-[#ED967D] rounded-3xl flex-row">
          <View className="w-[40%] h-full items-center justify-center">
            <Image source={require("../assets/Icon Booking.png")} />
          </View>
          <View className="w-[60%] p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center text-white">
              Agende suas consultas:
            </Text>
            <Text className="font-bold text-sm text-center text-white">
              Cuidar de si mesma é o primeiro passo para ser a mãe que você
              deseja ser.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-96 h-60 bg-[#FFCDB2] rounded-3xl flex-row">
          <View className="w-1/2 items-center justify-center">
            <ImageBackground
              source={require("../assets/Card2.png")}
              resizeMode="contain"
              className="flex-1 w-full rounded-l-3xl"
            />
          </View>
          <View className="w-1/2 p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center text-white">
              Troque experiencias
            </Text>
            <Text className="font-bold text-sm text-center text-white">
              Unir-se a grupos de apoio na maternidade fortalece, compartilha
              experiências e transforma desafios em crescimento.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="w-96 h-48 bg-[#70BAC2] rounded-3xl flex-row">
          <View className="w-[35%] items-center justify-center">
            <Image
              source={require("../assets/IconEbook.png")}
              resizeMode="contain"
            />
          </View>
          <View className="w-[65%] p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center text-white">
            E-book para auto-compreendimento
            </Text>
            <Text className="font-bold text-sm text-center text-white">
            Descubra o poder do autoconhecimento na maternidade com nosso e-book e transforme sua jornada materna.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
