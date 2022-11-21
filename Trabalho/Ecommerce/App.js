import {Routes} from "./src/Routes";
import { IdProvider } from "./src/context/IdContext";

export default function App() {
  return (

    <IdProvider>
      <Routes />
    </IdProvider>
  );
}

