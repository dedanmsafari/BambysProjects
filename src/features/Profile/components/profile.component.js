import React from "react";
import { View, StyleSheet } from "react-native";
import { ProfileContainer } from "../screens/profileScreen.styles";
import AvatarIcon from "../../../components/Avatar/avatar.component";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const ProfileBlock = ({ source, name, bio }) => {
  return (
    <ProfileContainer>
      <AvatarIcon source={source} size={150} />
      <Spacer />
      <Text variant="label">{name}</Text>
      <Spacer />
      <Text variant="caption" style={{ width: 300, textAlign: "center" }}>
        {bio}
      </Text>
    </ProfileContainer>
  );
};

export default ProfileBlock;
