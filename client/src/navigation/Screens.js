import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";

import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Home from "../screens/Home";
import { AuthContext } from "../context/auth_context";

const Stack = createNativeStackNavigator();

const AuthStack = (
    <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </>
);

const HomeStack = (
    <>
        <Stack.Screen name="Home" component={Home} />
    </>
);

export default function Screens() {
    const { authenticated } = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: authenticated,
            }}
        >
            {authenticated ? HomeStack : AuthStack}
        </Stack.Navigator>
    );
}
