import { Image, Text, TouchableOpacity, View, Linking } from "react-native";

export function SocialMedia(){
    return(
        <View className="mb-5">
            <Text className="font-semibold text-xl text-center text-[#70bac2]">Participe das nossas comunidades:</Text>

           <View className="px-16 flex-row justify-around mt-7">
                <TouchableOpacity onPress={() => Linking.openURL("https://chat.whatsapp.com/ChYUtFBOqhLAVNWy4Qk9aC")}>
                    <Image source={require("../assets/whatsapp.png")} className="w-12 h-12"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/maternidade.semcliche/')}>
                    <Image source={require("../assets/instagram.png")} className="w-12 h-12"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}