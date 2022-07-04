import React, { useContext, useState } from "react";
import { FlatList, View } from "react-native";
import { ResturantInfoCard } from "../components/ResturantInfoCard.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { ResturantsContext } from "../../../services/resturants/resturants.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingView = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ContainerView = styled(View)`
  flex: 1;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const ResturantsScreen = ({ navigation }) => {
  const { isLoading, resturants } = useContext(ResturantsContext);
  const [isToggle, setIsToggle] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  return (
    <ContainerView>
      {isLoading && (
        <LoadingView>
          <Loading size={50} animating={isLoading} color={Colors.blue300} />
        </LoadingView>
      )}

      <Search
        isFavoritesToggled={isToggle}
        onFavoritesToggled={() => setIsToggle(!isToggle)}
      />

      {isToggle && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}

      <ResturantList
        data={resturants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { resturant: item })
            }
          >
            <ResturantInfoCard resturant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </ContainerView>
  );
};
