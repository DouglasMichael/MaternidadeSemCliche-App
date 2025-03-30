import { NavigationContainer } from "@react-navigation/native";
import StackNavigationApp from "./Stack";
import { Navigation } from "@/Components/Navigation";

export default function RoutesContainer(){
    return(
        <NavigationContainer>
            <StackNavigationApp/>
        </NavigationContainer>
    )
}