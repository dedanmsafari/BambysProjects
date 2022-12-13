import React from "react";
import { View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  BackIconContainer,
  HeaderContainer,
  MoreVertContainer,
} from "./header.styles";

const Header = ({ onPress }) => {
  return (
    <HeaderContainer>
      <BackIconContainer onPress={onPress}>
        <Ionicons name="arrow-back" size={24} color="grey" />
      </BackIconContainer>
      <MoreVertContainer>
        <MaterialIcons name="more-vert" size={24} color="grey" />
      </MoreVertContainer>
    </HeaderContainer>
  );
};

export default Header;
