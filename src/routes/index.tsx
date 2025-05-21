import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@/context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function RoutesContainer(){
    const {isAuthenticated, loading} = useAuth()

    if (loading) {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" />
          </View>
        );
      }

    return(
        <NavigationContainer>
            {isAuthenticated ? <AppStack /> : <AuthStack/>}
        </NavigationContainer>
    )
}