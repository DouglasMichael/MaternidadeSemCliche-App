import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type PropsStackRoutes = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    Booking: undefined;
    Community: undefined;
    Ebook: undefined;
    Article: undefined;
    Profile: undefined;
    Navigation: undefined;
}

export type PropsScreensApp<T extends keyof PropsStackRoutes> = NativeStackScreenProps<PropsStackRoutes, T>