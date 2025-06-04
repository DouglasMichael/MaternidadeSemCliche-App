import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, AvatarImage } from "../Components/Avatar";
import { Input } from "../Components/Input";
import { Calendar } from "react-native-calendars";
import { SetStateAction, useState } from "react";
import { Button } from "../Components/Button";
import { Header } from "../Components/Header";
import { PropsScreensApp } from "@/routes/interface";

export function Booking({navigation}: PropsScreensApp<"Booking">) {
  const [selected, setSelected] = useState("");
  return (
    <>
      <ScrollView className="flex-1 bg-[#ED967D]">
        <Header />
        <View className="items-center mb-6">
          <Text className="text-white font-semibold">
            Agendamento de consultas
          </Text>

          <Image source={require("../assets/Icon Booking.png")} />

          <View className="w-96 h-44 bg-[#FFCDB2] rounded-lg">
            <Text className="text-white font-bold text-base text-center p-6">
              Nosso atendimento personalizado é dedicado a tratar cada caso com
              a exclusividade e atenção que toda mamãe merece. Agende sua
              primeira consulta gratuita e comece sua jornada de cuidado e
              bem-estar!
            </Text>
          </View>
        </View>

        <View className="px-6 justify-evenly mb-8">
            <Text className="text-white">Motivo consulta</Text>
            <Input className={"border-white"} />
        </View>

        <View className="px-6 mb-2 gap-2">
          <Text className="text-white">Data consulta</Text>
          <Calendar
            minDate ={new Date().toISOString().split("T")[0]}
            onDayPress={(day: { dateString: SetStateAction<string> }) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
          />
          <View className="items-end">
            <Button label="Enviar" variant="secondary" className="w-1/2" />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
