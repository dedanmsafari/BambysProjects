import React from "react";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  BackIconContainer,
  HeaderContainer,
  MoreVertContainer,
} from "../screens/profileScreen.styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Header = ({ title, enableMore, backIcon }) => {
  return (
    <HeaderContainer>
      <BackIconContainer>
        {backIcon && <Ionicons name="arrow-back" size={24} color="white" />}
        <Spacer position="left" size="small" />
        <Text variant="header">{title}</Text>
      </BackIconContainer>
      <MoreVertContainer>
        {enableMore && (
          <MaterialIcons name="more-vert" size={24} color="white" />
        )}
      </MoreVertContainer>
    </HeaderContainer>
  );
};

export default Header;
