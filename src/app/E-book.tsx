import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../Components/Header";
import { PropsScreensApp } from "@/routes/interface";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';

export function Ebook({navigation}: PropsScreensApp<'Ebook'>) {
  const files = {
    birra: require('../assets/Guia_Como_Lidar_com_Birras.pdf'),
    trabalho: require('../assets/Guia_Carreira_e_Maternidade.pdf'),
    
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
          Nossos e-books mais populares:
        </Text>
        <View className="items-center">
          <TouchableOpacity className="w-96 bg-[#F5EBE0] rounded-lg items-center mb-5" onPress={() => handleDownload('birra')}>
            <Text className="p-6 font-semibold text-base text-justify">
              Vencendo as Birras é um guia direto e prático para mães e pais que
              enfrentam os desafios do "Terrible Two". Com 42 páginas repletas de
              ilustrações, infográficos e imagens envolventes, este eBook torna a
              leitura leve e dinâmica, sem enrolação.
            </Text>
            <ImageBackground
              source={require("../assets/Card3.png")}
              resizeMode="contain"
              className="w-[90%] h-28 mb-5"
            />
          </TouchableOpacity>
          <TouchableOpacity className="w-96 bg-[#F5EBE0] rounded-lg items-center mb-5" onPress={() => handleDownload('trabalho')}>
            <ImageBackground
              source={require("../assets/Card4.png")}
              resizeMode="contain"
              className="w-full h-[320px] mt-6"
            />
            <Text className="p-3 font-semibold text-base text-justify">
              oferece dicas práticas, estratégias para equilibrar carreira e
              maternidade, e insights sobre como lidar com a saudade do bebê e as
              novas demandas da rotina profissional. Com este material, você se
              sentirá mais preparada, confiante e pronta para encarar essa nova
              fase com equilíbrio e bem-estar. Baixe agora e comece essa nova
              jornada com o apoio que você merece!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}
