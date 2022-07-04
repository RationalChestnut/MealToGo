import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Image } from "react-native";

export const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]}; ;
`;

export const ResturantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled(View)`
  justify-content: space-between;
  flex-direction: row;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
