import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  RestaurantsStack,
  FavoritesStack,
  TopRestaurantsStack,
  SearchStack,
  AccountStack,
} from "./";

import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        {/* Screens (Routes)*/}
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes " }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "restaurants":
      iconName = "compass-outline";
      break;

    case "favorites":
      iconName = "heart-outline";
      break;

    case "search":
      iconName = "magnify";
      break;
    case "top-restaurants":
      iconName = "star-outline";
      break;

    case "account":
      iconName = "home-outline";
      break;

    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={22} />
  );
}
