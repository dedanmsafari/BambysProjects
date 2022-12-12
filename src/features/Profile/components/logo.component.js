import React from "react";
import { Image } from "react-native";
import { LogoContainer } from "../screens/profileScreen.styles";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
const LogoBlock = () => {
  return (
    <LogoContainer>
      <Image
        style={{ height: 60, width: 60 }}
        source={require("../../../../assets/Logo.png")}
      />
      <Spacer />
      <Text variant="hint">Version 1.0.0</Text>
    </LogoContainer>
  );
};

export default LogoBlock;
