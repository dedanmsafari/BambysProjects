import React, { useState } from "react";
import { Image } from "react-native";
import {
  TopBarContainer,
  LogoButtonHome,
  IconContainer,
  IconButton,
  ModalContainer,
} from "./topbar.styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../infrastructure/theme/colors";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ onPress }) => {
  const navigation = useNavigation();
  return (
    <TopBarContainer>
      <LogoButtonHome activeOpacity={0.5} onPress={onPress}>
        <Image
          style={{ height: 36, width: 130 }}
          source={require("../../../../../assets/brandName.png")}
        />
        <Ionicons name="chevron-down-outline" size={20} color="black" />
      </LogoButtonHome>

      <IconContainer>
        <IconButton onPress={() => navigation.navigate("Maps")}>
          <Ionicons name="map-sharp" size={20} color={colors.brand.primary} />
        </IconButton>
        <IconButton>
          <Ionicons
            name="notifications-outline"
            size={20}
            color={colors.brand.primary}
          />
        </IconButton>
        <IconButton>
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            size={20}
            color={colors.brand.primary}
          />
        </IconButton>
      </IconContainer>
    </TopBarContainer>
  );
};

export default TopBar;
