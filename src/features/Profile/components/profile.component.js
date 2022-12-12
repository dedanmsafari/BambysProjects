import React from "react";
import { View, StyleSheet } from "react-native";
import { ProfileContainer } from "../screens/profileScreen.styles";
import AvatarIcon from "../../../components/Avatar/avatar.component";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const ProfileBlock = () => {
  return (
    <ProfileContainer>
      <AvatarIcon
        source={require("../../../../assets/postPicture.png")}
        size={150}
      />
      <Spacer />
      <Text variant="label">Dedan Msafari</Text>
      <Spacer />
      <Text variant="caption" style={{ width: 300, textAlign: "center" }}>
        The guy you call when you want to get your products ready and designs
        perfect
      </Text>
    </ProfileContainer>
  );
};

export default ProfileBlock;
