import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ScreenContainer } from "./onBoarding.styles";
import { greenText } from "./neighborhood.screens";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const NeverAloneWalkthrough = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScreenContainer>
        <Image
          style={{ width: 380, height: 380 }}
          source={require("../../../../assets/neverAlone.png")}
        />
        <Spacer size="medium" />
        <Text
          style={{ width: 330, textAlign: "center", color: "#262626" }}
          variant="label"
        >
          You're {greenText("Never Alone!")}
        </Text>
        <Spacer size="medium" />
        <Text
          variant="body"
          style={{ width: 300, textAlign: "center", color: "#757575" }}
        >
          Meet locals and arrivals in your area with shared interests and
          socialize.
        </Text>
      </ScreenContainer>
    </View>
  );
};

export default NeverAloneWalkthrough;
