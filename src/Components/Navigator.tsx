import { ImageBackground, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PropsStackRoutes } from "@/routes/interface"; // tipo das rotas
import { useAuth } from "@/context/AuthContext";

type AppStackNavigation = NativeStackNavigationProp<PropsStackRoutes>;



export function Navigator(){
    const navigation = useNavigation<AppStackNavigation>();
    const {logout} = useAuth()
    return(
    <View className=" flex-row items-center justify-evenly w-full h-20 bg-[#A29B94]">
        <TouchableOpacity onPress={() => navigation.navigate("Article")} >
            <ImageBackground source={require("../assets/ArticleIcon.png")} resizeMode="contain" className="w-12 h-12"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
            <ImageBackground source={require("../assets/UserIcon.png")} resizeMode="contain" className="w-12 h-12"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} >
            <ImageBackground source={require("../assets/ExitIcon.png")} resizeMode="contain" className="w-12 h-12"/>
        </TouchableOpacity>
    </View>
    )
}