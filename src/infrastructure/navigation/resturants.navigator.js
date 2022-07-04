import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ResturantsScreen } from "../../../src/features/resturants/screens/resturants.screen";
import { ResturantDetail } from "../../features/resturants/screens/resturants_details.screen";

const ResturantStack = createStackNavigator();

export const ResturantsNavigator = () => {
  return (
    <ResturantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      {/* Navigate prop is auto passed down from the screen */}
      <ResturantStack.Screen name="Restaurant" component={ResturantsScreen} />
      <ResturantStack.Screen
        name="RestaurantDetail"
        component={ResturantDetail}
      />
    </ResturantStack.Navigator>
  );
};
