import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../Components/Header";
import { PropsScreensApp, PropsStackRoutes } from "@/routes/interface";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';



export function Article({ navigation }: PropsScreensApp<"Article">) {
  const files = {
    familia: require('../assets/Artigo_maternidade_familia.pdf'),
    inseguranca: require('../assets/Artigo_maternidade_insegurança.pdf'),
    mudanca: require('../assets/Artigo_maternidade_mudança.pdf')
  };

  type FileKeys = keyof typeof files; // Isso será: 'familia' | 'inseguranca' | 'mudanca'

  
  const handleDownload = async (fileName: FileKeys) => {
    try {
      const asset = Asset.fromModule(files[fileName]);
      await asset.downloadAsync();
  
      const fileUri = FileSystem.documentDirectory + fileName + '.pdf';
  
      await FileSystem.copyAsync({
        from: asset.localUri!,
        to: fileUri,
      });
  
      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView className="flex-1 bg-[#70BAC2]">
      <Header />
      <Text className="text-center font-bold text-2xl text-white mb-10">
        Artigos importantes
      </Text>
      <View className="flex items-center gap-11">
        <View className="w-96 h-60 bg-[#F5EBE0] rounded-3xl flex-row">
          <View className="w-1/2 items-center justify-center">
            <ImageBackground
              source={require("../assets/Card5.png")}
              resizeMode="cover"
              className="flex-1 w-full rounded-full"
            />
          </View>
          <View className="w-1/2 p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center">
              Familia
            </Text>
            <Text className="font-bold text-sm text-justify">
              Descubra no nosso artigo como fortalecer os laços familiares e
              criar uma base sólida de amor e conexão.
            </Text>
            <TouchableOpacity className="flex-row items-center w-1/2 gap-4" onPress={() => handleDownload('familia')}>
              <Text className="font-bold text-sm text-[#70BAC2]">
                Clique aqui para acessar o artigo
              </Text>
              <ImageBackground
                source={require("../assets/Icon Download.png")}
                resizeMode="cover"
                className="w-5 h-5"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-96 h-60 bg-[#F5EBE0] rounded-3xl flex-row">
          <View className="w-1/2 items-center justify-center">
            <ImageBackground
              source={require("../assets/Card6.png")}
              resizeMode="cover"
              className="flex-1 w-full rounded-full"
            />
          </View>
          <View className="w-1/2 p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center">
              Inseguranças
            </Text>
            <Text className="font-bold text-sm mb-1">
              compreender as inseguranças femininas para conquistar autoconfiança e empoderamento.
            </Text>
            <TouchableOpacity className="flex-row items-center w-1/2 gap-4" onPress={() => handleDownload('inseguranca')}>
              <Text className="font-bold text-sm text-[#70BAC2]">
                Clique aqui para acessar o artigo
              </Text>
              <ImageBackground
                source={require("../assets/Icon Download.png")}
                resizeMode="cover"
                className="w-5 h-5"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-96 h-60 bg-[#F5EBE0] rounded-3xl flex-row mb-4">
          <View className="w-1/2 items-center justify-center">
            <ImageBackground
              source={require("../assets/Card7.png")}
              resizeMode="cover"
              className="flex-1 w-full rounded-full"
            />
          </View>
          <View className="w-1/2 p-3 items-center">
            <Text className="font-bold text-base mb-5 text-center">
              Mudança
            </Text>
            <Text className="font-bold text-sm text-center mb-2">
              O artigo revela como abraçar as mudanças como oportunidades de
              crescimento e transformação pessoal.
            </Text>
            <TouchableOpacity className="flex-row items-center w-1/2 gap-4" onPress={() => handleDownload('mudanca')}>
              <Text className="font-bold text-sm text-[#70BAC2]">
                Clique aqui para acessar o artigo
              </Text>
              <ImageBackground
                source={require("../assets/Icon Download.png")}
                resizeMode="cover"
                className="w-5 h-5"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
