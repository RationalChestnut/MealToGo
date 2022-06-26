import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ResturantsScreen } from "../../../src/features/resturants/screens/resturants.screen";

const ResturantStack = createStackNavigator();

export const ResturantsNavigator = () => {
  return (
    <ResturantStack.Navigator screenOptions={{ headerShown: false }}>
      <ResturantStack.Screen name="Restaurant" component={ResturantsScreen} />
    </ResturantStack.Navigator>
  );
};
