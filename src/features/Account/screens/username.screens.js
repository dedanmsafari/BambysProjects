import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import BackArrow from "../components/backArrow.component";
import { RegisterContainer } from "./screens.styles";
import { SignInButton } from "./screens.styles";

const UsernameScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <RegisterContainer>
        <BackArrow
          title="Choose Username"
          caption="A name to connect with others"
        />
        <TextInput
          placeholder="Username"
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
          onPress={() => navigation.navigate("Location")}
        >
          <Text variant="caption" style={{ color: "white" }}>
            Next
          </Text>
        </SignInButton>
      </RegisterContainer>
    </View>
  );
};

export default UsernameScreen;
