import React from "react";
import { View, StyleSheet } from "react-native";
import {
  IndividualLocation,
  LocationAreas,
  LocationContainer,
  LocationMarker,
  LocationName,
} from "../screens/profileScreen.styles";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

const LocationBlock = () => {
  return (
    <LocationContainer>
      <Text>Location</Text>
      <Spacer />
      <LocationAreas>
        <IndividualLocation>
          <LocationName>
            <Ionicons name="location-sharp" size={24} color="lightgrey" />
            <Text style={{ color: "grey" }}> Current Location </Text>
          </LocationName>
          {/* <LocationMarker>
            <Ionicons
              name="checkmark-sharp"
              size={24}
              color={colors.brand.primary}
            />
          </LocationMarker> */}
        </IndividualLocation>

        <Spacer position="top" size="large" />

        <IndividualLocation>
          <LocationName>
            <Ionicons
              name="location-sharp"
              size={24}
              color={colors.brand.primary}
            />
            <Text> Buruburu, Nairobi </Text>
          </LocationName>
          <LocationMarker>
            <Ionicons
              name="checkmark-sharp"
              size={24}
              color={colors.brand.primary}
            />
          </LocationMarker>
        </IndividualLocation>
      </LocationAreas>
    </LocationContainer>
  );
};

export default LocationBlock;
