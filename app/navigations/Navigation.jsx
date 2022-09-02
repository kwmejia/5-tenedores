import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Favorites, TopRestaurants, Account, Search } from "../screens";
import { RestaurantsStack } from "./";

const Tab = createBottomTabNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Screens (Routes)*/}
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes " }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurants}
          options={{ title: "Top" }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
