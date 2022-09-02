import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Account, Login, Register } from "../screens/Account/";

const Stack = createStackNavigator();
export const AccountStack = () => {
  return (
    // Rutass ....
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta" }}
      />

      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar Sesión" }}
      />

      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  );
};
