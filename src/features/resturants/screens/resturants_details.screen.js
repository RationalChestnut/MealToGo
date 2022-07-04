import React, { useState } from "react";
import { List } from "react-native-paper";
import { ResturantInfoCard } from "../components/ResturantInfoCard.component";
import { ScrollView } from "react-native-gesture-handler";

export const ResturantDetail = ({ route }) => {
  const { resturant } = route.params;
  const [expandedBreakfast, setExpandedBreakfast] = useState(true);
  const [expandedLunch, setExpandedLunch] = useState(false);
  const [expandedDinner, setExpandedDinner] = useState(false);

  return (
    <>
      <ResturantInfoCard resturant={resturant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            expanded={expandedBreakfast}
            onPress={() => setExpandedBreakfast(!expandedBreakfast)}
            left={(props) => <List.Icon {...props} icon="egg-fried" />}
          >
            <List.Item title="Eggs and Pancakes" />
            <List.Item title="Chocolate Croissant" />
            <List.Item title="Toast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            expanded={expandedLunch}
            onPress={() => setExpandedLunch(!expandedLunch)}
            left={(props) => <List.Icon {...props} icon="food" />}
          >
            <List.Item title="Burgers and Fries" />
            <List.Item title="Salad" />
            <List.Item title="Lettuce Wraps" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            expanded={expandedDinner}
            onPress={() => setExpandedDinner(!expandedDinner)}
            left={(props) => <List.Icon {...props} icon="food-turkey" />}
          >
            <List.Item title="Steak" />
            <List.Item title="Lamb Chops" />
            <List.Item title="Pork and Potatoes" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};
