import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../Components/Header";
import { PropsScreensApp } from "@/routes/interface";

export function Ebook({navigation}: PropsScreensApp<'Ebook'>) {
  return (
    <>
      <ScrollView className="flex-1 bg-[#70BAC2]">
        <Header />
        <Text className="text-center font-bold text-2xl text-white mb-10">
          Nossos e-books mais populares:
        </Text>
        <View className="items-center">
          <TouchableOpacity className="w-96 bg-[#F5EBE0] rounded-lg items-center mb-5">
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
          <TouchableOpacity className="w-96 bg-[#F5EBE0] rounded-lg items-center mb-5">
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

      <View className=" flex-row items-center justify-evenly w-full h-20 bg-[#A29B94]">
            <TouchableOpacity onPress={() => navigation.navigate("Article")}>
                <ImageBackground source={require("../assets/ArticleIcon.png")} resizeMode="contain" className="w-12 h-12"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <ImageBackground source={require("../assets/UserIcon.png")} resizeMode="contain" className="w-12 h-12"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <ImageBackground source={require("../assets/ExitIcon.png")} resizeMode="contain" className="w-12 h-12"/>
            </TouchableOpacity>
        </View>      
    </>
  );
}
