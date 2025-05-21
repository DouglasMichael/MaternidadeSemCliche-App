import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/app/Login";
import { Register } from "@/app/Register";
import { PropsStackRoutes } from "./interface";

const StackNavigator = createNativeStackNavigator<PropsStackRoutes>();

export default function AuthStack() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Register" component={Register} />
    </StackNavigator.Navigator>
  );
}
