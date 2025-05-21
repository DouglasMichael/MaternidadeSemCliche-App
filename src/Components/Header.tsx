import { Image, View } from "react-native";
import { Avatar, AvatarImage } from "./Avatar";
import { useAuth } from "@/context/AuthContext";

export function Header() {
  const {user} = useAuth()
    return(
        <View className="pt-3 flex-row items-center justify-around mb-10">
        <Image
          source={require("../assets/Logo 4.png")}
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

    )
}