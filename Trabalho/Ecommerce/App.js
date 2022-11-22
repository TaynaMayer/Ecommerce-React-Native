import {Routes} from "./src/Routes";
import { IdProvider } from "./src/context/IdContext";
import {CartProvider} from"./src/context/Cart";

export default function App() {
  return (
    
    <IdProvider>
     <CartProvider>
      <Routes />
    </CartProvider>

    </IdProvider>
  );
}

