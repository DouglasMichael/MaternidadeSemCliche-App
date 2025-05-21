import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigator } from "@/Components/Navigator"; // Importando o componente Navigator
import Home from "@/app/Home";
import { Booking } from "@/app/Booking";
import { Community } from "@/app/Community";
import { Ebook } from "@/app/E-book";
import { Article } from "@/app/Article";
import { Profile } from "@/app/Proflie";
import { View, SafeAreaView } from "react-native"; // Importando SafeAreaView para gerenciar a área segura
import { PropsStackRoutes } from "./interface";

const StackNavigator = createNativeStackNavigator<PropsStackRoutes>();

export default function AppStack() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StackNavigator.Navigator screenOptions={{ headerShown: true, headerBackVisible: true, headerTitle: "", headerTransparent: true}}>
          <StackNavigator.Screen name="Home" component={Home} />
          <StackNavigator.Screen name="Booking" component={Booking} />
          <StackNavigator.Screen name="Community" component={Community} />
          <StackNavigator.Screen name="Ebook" component={Ebook} />
          <StackNavigator.Screen name="Article" component={Article} />
          <StackNavigator.Screen name="Profile" component={Profile} />
        </StackNavigator.Navigator>
      </View>

      {/* O Navigator é colocado fora da navegação, fixado no rodapé */}
      <Navigator />
    </SafeAreaView>
  );
}
