import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/app/Login";
import { Register } from "@/app/Register";
import { PropsStackRoutes } from "./interface";
import ForgotPassword from "@/app/ForgotPassword";
import VerifyCode from "@/app/VerifyCode";
import ChangePassword from "@/app/ChangePassword";

const StackNavigator = createNativeStackNavigator<PropsStackRoutes>();

export default function AuthStack() {
  return (
   <StackNavigator.Navigator screenOptions={{ headerShown: true, headerBackVisible: true, headerTitle: "", headerTransparent: true}}>
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Register" component={Register} />
      <StackNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
      <StackNavigator.Screen name="VerifyCode" component={VerifyCode} />
      <StackNavigator.Screen name="ChangePassword" component={ChangePassword} />
    </StackNavigator.Navigator>
  );
}
