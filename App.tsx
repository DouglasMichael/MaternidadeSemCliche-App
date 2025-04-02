import RoutesContainer from "@/routes";
import "./global.css"
import Login from "./src/app/Login";
import { ToastProvider } from "@/Components/Toast";



export default function App() {
  return (
    <ToastProvider position="top">
      <RoutesContainer/>
    </ToastProvider>
  );
}