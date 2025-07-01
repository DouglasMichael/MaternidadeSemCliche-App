import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, AvatarImage } from "../Components/Avatar";
import { PropsScreensApp } from "@/routes/interface";
import { useAuth } from "@/context/AuthContext";

export default function Home({ navigation }: PropsScreensApp<'Home'>) {
  const{user} = useAuth()
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
                uri: user?.picture ||"https://www.gravatar.com/avatar/?d=mp",
              }}
            />
          </Avatar>
        </View>
        <View className="flex items-center gap-11">
          <TouchableOpacity
            className="w-96 h-44 bg-[#ED967D] rounded-3xl flex-row"
            onPress={() => navigation.navigate("Booking")}
          >
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

          <TouchableOpacity
            className="w-96 h-60 bg-[#FFCDB2] rounded-3xl flex-row"
            onPress={() => navigation.navigate("Community")}
          >
            <View className="w-1/2 items-center justify-center">
              <ImageBackground
                source={require("../assets/Card2.png")}
                resizeMode="cover"
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

          <TouchableOpacity
            className="w-96 h-48 bg-[#70BAC2] rounded-3xl flex-row mb-4"
            onPress={() => navigation.navigate("Ebook")}
          >
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
                Descubra o poder do autoconhecimento na maternidade com nosso
                e-book e transforme sua jornada materna.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}
