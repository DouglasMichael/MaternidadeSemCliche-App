import { Image, Text, TouchableOpacity, View } from "react-native";

export function EnterWith({label}: {label:String}){
    return(
        <View className="mb-5">
            <Text className="font-semibold text-xl text-center text-[#70bac2]">{label}</Text>

            <View className="px-16 flex-row justify-around mt-7">
                <TouchableOpacity>
                    <Image source={require("../assets/google.png")} className="w-12 h-12"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../assets/apple.png")} className="w-12 h-12"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}