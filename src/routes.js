import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./screens/main";
import Product from "./screens/product";

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#DA552F"
          },
          headerTintColor: "#FFFFFF"
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "JSHunt"
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={({ route }) => ({
            title: route.params.product.title
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
