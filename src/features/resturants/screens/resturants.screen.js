import React from "react";
import { SafeAreaView, StatusBar, FlatList, View } from "react-native";
import { ResturantInfoCard } from "../components/ResturantInfoCard.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const ResturantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ResturantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => <ResturantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};
