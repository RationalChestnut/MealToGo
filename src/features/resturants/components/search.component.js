import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { View } from "react-native";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Search = () => {
  const locationContext = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(locationContext.keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          locationContext.search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
