import React from "react";
import { Image } from "react-native";
import { LogoContainer } from "../screens/profileScreen.styles";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
const LogoBlock = () => {
  return (
    <LogoContainer>
      <Image
        style={{ height: 86.5, width: 94 }}
        source={require("../../../../assets/Logo.png")}
      />
      <Spacer />
      <Text variant="hint" style={{ marginLeft: -12 }}>
        Version 1.0.0
      </Text>
    </LogoContainer>
  );
};

export default LogoBlock;
