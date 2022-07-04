import React from "react";
import styled from "styled-components/native";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { Spacer } from "../spacer/Spacer.component";
import { MapCallout } from "../../features/map/components/mapcallout.component";
const FavoritesWrapper = styled(View)`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length)
    return (
      <Spacer variant="left.large">
        <Text>Add a few favorites</Text>
      </Spacer>
    );
  return (
    <FavoritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showHorizontalIndicator={false}>
        {favorites.map((resturant) => {
          const key = resturant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    resturant,
                  })
                }
              >
                <MapCallout resturant={resturant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
