import { Image, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { GoogleSignin, User, isSuccessResponse } from "@react-native-google-signin/google-signin";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

GoogleSignin.configure({
    iosClientId: "371489135-jjbn4l4q2r00a53tl8299lkgc178k3ks.apps.googleusercontent.com",
    webClientId: "371489135-rcgaffospvilhdff34dr7fo2ae8f88qd.apps.googleusercontent.com"
})


export function EnterWith({ label }: { label: string }) {
    const {loginWithGoogle} = useAuth()
    async function EnterwithGoogle(){
        try {
            await GoogleSignin.hasPlayServices()
            const response = await GoogleSignin.signIn()

            if (isSuccessResponse(response)) {
                const {idToken} = response.data
                await  loginWithGoogle(idToken)
                // try{
                //     await axios.post("http://192.168.15.22:3000/tokenGoogle", {
                //         tokenID: response.data.idToken
                //     })
                //     console.log(response.data)
                // } catch(erro){
                //     console.log(erro + "BBBBBBBB")
                //     if (axios.isAxiosError(erro)){
                //         GoogleSignin.signOut()
                        
                //     }
                // }
            }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    return (
        <View className="mb-5">
            <Text className="font-semibold text-xl text-center text-[#70bac2]">{label}</Text>

            <View className="px-16 flex-row justify-around mt-7">
                <TouchableOpacity onPress={EnterwithGoogle}>
                    <Image source={require("../assets/google.png")} className="w-12 h-12" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../assets/apple.png")} className="w-12 h-12" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
