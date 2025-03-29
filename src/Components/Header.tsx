import { Image, View } from "react-native";
import { Avatar, AvatarImage } from "./Avatar";

export function Header() {
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
              uri: "https://pbs.twimg.com/profile_images/1745949238519803904/ZHwM5B07_400x400.jpg",
            }}
          />
        </Avatar>
      </View>

    )
}