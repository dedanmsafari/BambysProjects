import React, { useState, useEffect, createContext } from "react";
import * as Location from "expo-location";

export const BackgroundContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [radiusValue, setValue] = useState(1.5);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const latitude = location?.coords?.latitude;
  const longitude = location?.coords?.longitude;
  const initialRegion = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.02922,
    longitudeDelta: 0.01121,
  };
  const value = {
    initialRegion,
    latitude,
    longitude,
    text,
    radiusValue,
    setValue,
  };
  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default LocationProvider;
