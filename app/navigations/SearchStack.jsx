import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Search } from "../screens";

const Stack = createStackNavigator();
export const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="serach"
        component={Search}
        options={{ title: "Buscar" }}
      />
    </Stack.Navigator>
  );
};
