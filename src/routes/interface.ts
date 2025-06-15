import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export type PropsStackRoutes = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    VerifyCode: undefined;
    ChangePassword: undefined;
    Home: undefined;
    Booking: undefined;
    Community: undefined;
    Ebook: undefined;
    Article: undefined;
    Profile: undefined;
    Navigator: undefined;
}

export type PropsScreensApp<T extends keyof PropsStackRoutes> = NativeStackScreenProps<PropsStackRoutes, T>
export type ScreenNavigationProp<T extends keyof PropsStackRoutes> =NativeStackNavigationProp<PropsStackRoutes, T>;