import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import BackArrow from "../components/backArrow.component";
import { RegisterContainer } from "./screens.styles";
import { SignInButton } from "./screens.styles";

const LocationScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <RegisterContainer>
        <BackArrow
          title="Choose your Neighborhood"
          caption="Try and be specific. You can change this later in your profile."
        />
        <TextInput
          placeholder="Location"
          cursorColor={colors.brand.tertiary}
          style={{
            borderBottomWidth: 1,
            height: 40,
            padding: 5,
            borderBottomColor: "#757575",
          }}
        />
        <Spacer size="large" />
        <SignInButton
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Interests")}
        >
          <Text variant="caption" style={{ color: "white" }}>
            Next
          </Text>
        </SignInButton>
      </RegisterContainer>
    </View>
  );
};

export default LocationScreen;
