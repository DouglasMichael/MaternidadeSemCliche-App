import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

export function Navigation() {
    return (
        <View className=" flex-row items-center justify-evenly w-full h-20 bg-[#A29B94]">
            <TouchableOpacity>
                <ImageBackground source={require("../assets/ArticleIcon.png")} resizeMode="contain" className="w-12 h-12"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <ImageBackground source={require("../assets/UserIcon.png")} resizeMode="contain" className="w-12 h-12"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <ImageBackground source={require("../assets/ExitIcon.png")} resizeMode="contain" className="w-12 h-12"/>
            </TouchableOpacity>
        </View>
    )
}