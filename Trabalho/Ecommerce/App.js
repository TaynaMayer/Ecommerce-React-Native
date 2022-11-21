import {Routes} from "./src/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
