import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { IconContainer } from "../../Home/components/TopBar/topbar.styles";

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.brand.tertiary }}>
      <StyledSafeAreaView>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <IconContainer>
            <Ionicons name="arrow-back" size={24} color="black" />
          </IconContainer>
        </View>
      </StyledSafeAreaView>
    </View>
  );
};

export default LoginScreen;
