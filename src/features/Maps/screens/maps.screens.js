import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Map = styled(MapView)`
  flex: 1;
`;
const initialRegion = {
  latitude: -1.282385,
  longitude: 36.819223,
  latitudeDelta: 0.02922,
  longitudeDelta: 0.01121,
};

const latlang = {
  latitude: -1.282385,
  longitude: 36.819223,
  latitudeDelta: 0.02951,
  longitudeDelta: 0.01121,
};

const MapsScreens = () => {
  const [region, setRegion] = useState(initialRegion);

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyDnRpib3dgMG8h1hZStFMh4nzpH8059T74",
          language: "en",
        }}
      />
      <Map region={region} provider={PROVIDER_GOOGLE}>
        <Marker
          draggable
          coordinate={latlang}
          onDragEnd={(e) => setRegion(e.nativeEvent.coordinate)}
        />
      </Map>
    </>
  );
};

const styles = StyleSheet.create({});

export default MapsScreens;
