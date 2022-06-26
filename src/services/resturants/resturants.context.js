import React, { useState, createContext, useEffect, useContext } from "react";
import { resturantRequest, resturantsTransform } from "./resturants.service";
import { LocationContext } from "../location/location.context";
export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({ children }) => {
  const [resturants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      resturantRequest(loc)
        .then(resturantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <ResturantsContext.Provider value={{ resturants, isLoading, error }}>
      {children}
    </ResturantsContext.Provider>
  );
};
