import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/Spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Section,
  Rating,
  Info,
  ResturantCardCover,
  ResturantCard,
} from "./resturant-info-card.styles";

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = false,
    rating = 3.5,
    isClosedTemporarily = true,
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section style={{ alignItems: "center" }}>
          <Rating>
            {ratingArray.map((rating, index) => {
              return <SvgXml xml={star} width={20} height={20} key={index} />;
            })}
          </Rating>

          <Spacer position="left" size="large">
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {isClosedTemporarily && !isOpenNow && (
                <Text variant="error">Closed Temporarily</Text>
              )}
              {isOpenNow && !isClosedTemporarily && (
                <SvgXml xml={open} width={20} height={20} />
              )}

              <Spacer position="left" size="medium">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </View>
          </Spacer>
        </Section>

        <Text variant="caption">{address}</Text>
      </Info>
    </ResturantCard>
  );
};
