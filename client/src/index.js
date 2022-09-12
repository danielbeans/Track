import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import AuthProvider from "./context/auth_provider";
import Screens from "./navigation/Screens";

function App() {
    return (
        <NativeBaseProvider>
            <AuthProvider>
                <NavigationContainer>
                    <Screens />
                </NavigationContainer>
            </AuthProvider>
        </NativeBaseProvider>
    );
}

registerRootComponent(App);
