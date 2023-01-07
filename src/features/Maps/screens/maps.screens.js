import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { BackgroundContext } from "../../../services/backgroundLocation/background.context";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/text/text.component";
import { Ionicons } from "@expo/vector-icons";
import { BackArrow } from "./maps.styles";

export const greenText = (text) => {
  return (
    <Text variant="caption" style={{ color: colors.brand.tertiary }}>
      {text}
    </Text>
  );
};
const Map = styled(MapView)`
  flex: 1;
`;

const MapsScreens = () => {
  const { initialRegion, latitude, longitude, text, radiusValue } =
    useContext(BackgroundContext);
  const [region, setRegion] = useState(initialRegion);
  const navigation = useNavigation();
  const latlang = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.02922,
    longitudeDelta: 0.01121,
  };

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search Neighborhoods"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.02922,
            longitudeDelta: 0.01121,
          });
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: "en",
          components: "country:ken",
          types: "establishment",
          radius: 30000,
          location: `${latitude},${longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1000000,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <BackArrow onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back-circle"
          size={30}
          color={colors.brand.primary}
        />
      </BackArrow>
      <Map region={region} provider={PROVIDER_GOOGLE}>
        {region.latitude === latlang.latitude &&
        region.latitude === latlang.latitude ? null : (
          <Marker coordinate={region} pinColor={colors.brand.primary}>
            <Callout>{greenText("Arrival")}</Callout>
          </Marker>
        )}

        <Marker
          // draggable
          coordinate={latlang}
          // onDragEnd={(e) => {
          //   setRegion({
          //     latitude: e.nativeEvent.coordinate.latitude,
          //     longitude: e.nativeEvent.coordinate.longitude,
          //     latitudeDelta: 0.02922,
          //     longitudeDelta: 0.01121,
          //   });
          // }}
          pinColor={colors.ui.icons}
        >
          <Callout>{greenText("Home")}</Callout>
        </Marker>
        <Circle
          center={region}
          radius={radiusValue * 1000}
          strokeColor={"rgba(19, 128, 0, 0.2)"}
          fillColor={"rgba(0, 128, 0, 0.15)"}
        />
      </Map>
    </View>
  );
};

export default MapsScreens;
