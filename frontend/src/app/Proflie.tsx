import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Avatar, AvatarImage } from "../Components/Avatar";
import { PropsScreensApp } from "@/routes/interface";
import { useAuth } from "@/context/AuthContext";

export function Profile({navigation}: PropsScreensApp<'Profile'>) {
  const {user} = useAuth()
  return (
      <View className="flex-1 bg-[#F5EBE0]">
        <View className="items-center py-8">
          <Image source={require("../assets/Logo 1.png")} className="w-56 h-56"/>
        </View>

        <View className="items-center">
          <Avatar className="h-56 w-56">
              <AvatarImage
              source={{
                  uri:  user?.picture ||"https://www.gravatar.com/avatar/?d=mp",
              }}
              />
          </Avatar>
        </View>
        <TouchableOpacity className="items-end relative right-24 bottom-8">
          <Image source={require("../assets/camera.png")} className="w-10 h-10"/>
        </TouchableOpacity>

        <View className="px-6 h-60 justify-evenly">
          <View className="gap-3">
            <Text className="text-[#ed967d] text-lg">Nome Completo</Text>
            <Text className="left-3 text-lg">{user?.nome}</Text>
            <Text className="text-[#ed967d] text-lg">Tel(DDD)</Text>
            <Text className="left-3 text-lg">{user?.telefone}</Text>
            <Text className="text-[#ed967d] text-lg">Email</Text>
            <Text className="left-3 text-lg">{user?.email}</Text>
          </View>
          </View>

      </View>
  );
}
