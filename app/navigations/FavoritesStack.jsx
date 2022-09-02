import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favorites } from "../screens/";

const Stack = createStackNavigator();
export const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
};
