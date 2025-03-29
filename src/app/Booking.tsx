import { Image, ScrollView, Text, View } from "react-native";
import { Avatar, AvatarImage } from "../Components/Avatar";
import { Input } from "../Components/Input";
import { Calendar } from "react-native-calendars";
import { SetStateAction, useState } from "react";
import { Button } from "../Components/Button";

export function Booking() {
  const [selected, setSelected] = useState("");
  return (
    <ScrollView className="flex-1 bg-[#ED967D]">
      <View className="pt-3 flex-row items-center justify-around mb-10">
        <Image
          source={require("../assets/Logo 4.png")}
          resizeMode="contain"
          className="w-[80%]"
        />
        <Avatar>
          <AvatarImage
            source={{
              uri: "https://pbs.twimg.com/profile_images/1745949238519803904/ZHwM5B07_400x400.jpg",
            }}
          />
        </Avatar>
      </View>

      <View className="items-center mb-6">
        <Text className="text-white font-semibold">
          Agendamento de consultas
        </Text>

        <Image source={require("../assets/Icon Booking.png")} />

        <View className="w-96 h-44 bg-[#FFCDB2] rounded-lg">
          <Text className="text-white font-bold text-base text-center p-6">
            Nosso atendimento personalizado é dedicado a tratar cada caso com a
            exclusividade e atenção que toda mamãe merece. Agende sua primeira
            consulta gratuita e comece sua jornada de cuidado e bem-estar!
          </Text>
        </View>
      </View>

      <View className="px-6 h-60 justify-evenly">
        <View className="gap-4">
          <Text className="text-white">Motivo consulta</Text>
          <Input className={"border-white"} />
          <Text className="text-white">CPF</Text>
          <Input className="border-white" />
        </View>
      </View>

      <View className="px-6 mb-2 gap-2">
        <Text className="text-white">Data consulta</Text>
        <Calendar
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
            <Button label="Enviar" variant="secondary" className="w-1/2"/>
        </View>
      </View>
    </ScrollView>
  );
}
