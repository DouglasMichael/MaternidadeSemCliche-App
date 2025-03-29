import "./global.css"
import { Home } from "./src/app/Home";
import { Login } from './src/app/Login';
import { Register } from "./src/app/Register";
import { Navigation } from "./src/Components/Navigation";

export default function App() {
  return (
    <>
      <Home/>
      <Navigation/>
    </>
  );
}