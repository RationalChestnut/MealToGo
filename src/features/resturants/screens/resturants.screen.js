import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ResturantInfoCard } from "../components/ResturantInfoCard.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { ResturantsContext } from "../../../services/resturants/resturants.context";
import { Search } from "../components/search.component";

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

export const ResturantsScreen = () => {
  const { isLoading, error, resturants } = useContext(ResturantsContext);
  return (
    <ContainerView>
      {isLoading && (
        <LoadingView>
          <Loading size={50} animating={isLoading} color={Colors.blue300} />
        </LoadingView>
      )}

      <Search />
      <ResturantList
        data={resturants}
        renderItem={({ item }) => <ResturantInfoCard resturant={item} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </ContainerView>
  );
};
