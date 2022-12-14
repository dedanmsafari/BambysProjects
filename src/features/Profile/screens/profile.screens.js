import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { DividerLine, SignOutContainer } from "./profileScreen.styles";
import Header from "../components/header.component";
import ProfileBlock from "../components/profile.component";
import LocationBlock from "../components/location.component";
import InterestBlock from "../components/Interest.component";
import RadiusDistanceBlock from "../components/radiusDistance.component";
import LogoBlock from "../components/logo.component";
import { SimpleLineIcons } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header title="profile" enableMore />
      <ScrollView>
        <ProfileBlock
          source={require("../../../../assets/postPicture.png")}
          name="Dedan Msafari"
          bio="The guy you call when you want to get your products ready and designs
        perfect"
        />
        <DividerLine />
        <LocationBlock />
        <DividerLine />
        <InterestBlock />
        <DividerLine />
        <RadiusDistanceBlock />
        <DividerLine />
        <LogoBlock />
        <DividerLine />
        <SignOutContainer>
          <SimpleLineIcons name="logout" size={24} color="red" />
          <Spacer position="right" />
          <Text style={{ color: "red" }}>Sign Out</Text>
        </SignOutContainer>
        <DividerLine />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
