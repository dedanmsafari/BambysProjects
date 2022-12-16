import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NeighborhoodContainer } from "./onBoarding.styles";
import { Text } from "../../../components/text/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";
export const greenText = (text) => {
  return (
    <Text variant="label" style={{ color: colors.brand.tertiary }}>
      {text}
    </Text>
  );
};
const NeighborhoodWalkthrough = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <NeighborhoodContainer>
        <Image
          style={{ position: "absolute", width: 400, height: 550 }}
          source={require("../../../../assets/backdrop.png")}
        />
        <Image
          style={{ width: 100, height: 92.5 }}
          source={require("../../../../assets/Logo.png")}
        />
        <Spacer size="medium" />
        <Text
          style={{ width: 330, textAlign: "center", color: "#262626" }}
          variant="label"
        >
          Same {greenText("Neighborhood,")} Better {greenText("Vibes.")}
        </Text>
        <Spacer size="medium" />
        <Text
          variant="body"
          style={{ width: 400, textAlign: "center", color: "#757575" }}
        >
          Spread the Vibe and link up with like-minded people in your area.
        </Text>
      </NeighborhoodContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NeighborhoodWalkthrough;
