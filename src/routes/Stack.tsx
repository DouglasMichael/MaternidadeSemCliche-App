import Home from "@/app/Home";
import Login from "@/app/Login";
import { Register } from "@/app/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PropsStackRoutes } from "./interface";
import { Booking } from "@/app/Booking";
import { Community } from "@/app/Community";
import { Ebook } from "@/app/E-book";
import { Article } from "@/app/Article";
import { Profile } from "@/app/Proflie";

const StackNavigator = createNativeStackNavigator<PropsStackRoutes>();

export default function StackNavigationApp(){
    return(
        <StackNavigator.Navigator screenOptions={{headerShown:false}}>
            <StackNavigator.Screen name="Login" component={Login} />
            <StackNavigator.Screen name="Register" component={Register} />
            <StackNavigator.Screen name="Home" component={Home} />
            <StackNavigator.Screen name="Booking" component={Booking} />
            <StackNavigator.Screen name="Community" component={Community} />
            <StackNavigator.Screen name="Ebook" component={Ebook} />
            <StackNavigator.Screen name="Article" component={Article} />
            <StackNavigator.Screen name="Profile" component={Profile} />
        </StackNavigator.Navigator>
    )
}