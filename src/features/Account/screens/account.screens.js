import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import Swiper from "react-native-swiper";
import { Spacer } from "../../../components/spacer/spacer.component";
import NeighborhoodWalkthrough from "../onBoarding/neighborhood.screens";
import NeverAloneWalkthrough from "../onBoarding/neverAlone.screens";
import TravelWalkthrough from "../onBoarding/travel.screens";
import {
  ButtonsContainer,
  SignInButton,
  CreateAccountButton,
} from "./screens.styles";
import { Text } from "../../../components/text/text.component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

const AccountScreen = () => {
  return (
    <>
      <Swiper
        loop
        autoplay
        autoplayTimeout={7}
        activeDotColor={colors.brand.primary}
        removeClippedSubviews={false}
      >
        <NeighborhoodWalkthrough />
        <NeverAloneWalkthrough />
        <TravelWalkthrough />
      </Swiper>
      <ButtonsContainer>
        <SignInButton activeOpacity={0.5}>
          <Text variant="caption" style={{ color: "white" }}>
            Get Started
          </Text>
        </SignInButton>
        <Spacer size="medium" />
        <CreateAccountButton activeOpacity={0.5}>
          <MaterialCommunityIcons
            name="login-variant"
            size={17}
            color="#757575"
          />
          <Spacer position="right" />
          <Text variant="caption">Got an account? Sign in here</Text>
        </CreateAccountButton>
      </ButtonsContainer>
    </>
  );
};

export default AccountScreen;
