import RoutesContainer from "@/routes";
import "./global.css";
import Login from "./src/app/Login";
import { ToastProvider } from "@/Components/Toast";
import { AuthProvider } from "@/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider position="top">
        <RoutesContainer />
      </ToastProvider>
    </AuthProvider>
  );
}
