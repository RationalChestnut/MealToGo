import React from "react";
import { View, Platform } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import WebView from "react-native-webview";

const MapCalloutContainer = styled(View)`
  width: 200px;
  align-items: center;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 200px;
  height: 110px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 200px;
  height: 110px;
`;

const isAndroid = Platform.OS === "android";

export const MapCallout = ({ resturant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <MapCalloutContainer>
      <Image source={{ uri: resturant.photos[0] }} />
      <Text variant={"caption"} numberOfLines={3}>
        {resturant.name}
      </Text>
    </MapCalloutContainer>
  );
};
