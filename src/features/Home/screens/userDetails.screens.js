import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../../components/text/text.component";
import Header from "../components/header/header.component";
import { colors } from "../../../infrastructure/theme/colors";
import ProfileBlock from "../../Profile/components/profile.component";
import { DividerLine } from "../../Profile/screens/profileScreen.styles";
import InterestBlock from "../../Profile/components/Interest.component";
import { CommunicationsContainer } from "./home.styles";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useNavigation } from "@react-navigation/native";

const UserDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header onPress={() => navigation.goBack()} />
      <ProfileBlock
        source={require("../../../../assets/man1.jpg")}
        name="Tommy Lee"
        bio="I travel the world in search of treasures.Looking forward to engaging with locals wherever i go"
      />

      <CommunicationsContainer>
        <MaterialIcons name="message" size={24} color={colors.brand.tertiary} />
        <Spacer position="right" size="xlarge" />
        <Ionicons name="call" size={24} color={colors.brand.tertiary} />
        <Spacer position="right" size="xlarge" />
        <Ionicons name="videocam" size={24} color={colors.brand.tertiary} />
      </CommunicationsContainer>
      <DividerLine />
      <InterestBlock />
      <DividerLine />
    </View>
  );
};

export default UserDetailsScreen;
