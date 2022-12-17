import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { greenText } from "./neighborhood.screens";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TravelContainer } from "./onBoarding.styles";

const TravelWalkthrough = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TravelContainer>
        <Image
          style={{
            width: 470,
            height: 470,

            top: -30,
            right: -50,
          }}
          source={require("../../../../assets/traveltheWorld.png")}
        />
        <Spacer size="medium" />
        <Text
          style={{ width: 330, textAlign: "center", color: "#262626" }}
          variant="label"
        >
          {greenText("Travel")} the world!
        </Text>
        <Spacer size="medium" />
        <Text
          variant="body"
          style={{ width: 300, textAlign: "center", color: "#757575" }}
        >
          Share your Vibe with similar minds in neighborhoods across the world.
        </Text>
      </TravelContainer>
    </View>
  );
};

export default TravelWalkthrough;
