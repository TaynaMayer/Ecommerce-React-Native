import {Routes} from "./src/Routes";
import { IdProvider } from "./src/context/IdContext";
import {CartProvider} from"./src/context/Cart";
import {decode, encode} from "base-64"

export default function App() {


  if(!global.btoa) {
    global.btoa = encode;
  }

  if(!global.atob) {
    global.atobe = decode
  }

  return (
    
    <IdProvider>
     <CartProvider>
      <Routes />
    </CartProvider>

    </IdProvider>
  );
}

