import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { LocationContext } from "../../../services/location/location.context";
import { ResturantsContext } from "../../../services/resturants/resturants.context";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { MapCallout } from "../components/mapcallout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { resturants = [] } = useContext(ResturantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {resturants.map((resturant) => {
          return (
            <MapView.Marker
              key={resturant.name}
              title={resturant.name}
              coordinate={{
                latitude: resturant.geometry.location.lat,
                longitude: resturant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    resturant: resturant,
                  })
                }
              >
                <MapCallout resturant={resturant} isMap />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
