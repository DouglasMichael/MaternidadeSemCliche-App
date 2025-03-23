import { Text, View } from "react-native";

export function Or(){
    return (
        <View className="px-6 flex-row justify-center gap-3 opacity-50">
            <View className="border-b-[1px] w-1/2 h-4"></View>
            <Text>Or</Text>
            <View className="border-b-[1px] w-1/2 h-4"></View>
        </View>
    )
}