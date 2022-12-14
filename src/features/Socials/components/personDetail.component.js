import React from "react";
import { View } from "react-native";
import AvatarIcon from "../../../components/Avatar/avatar.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";
import {
  PersonContainer,
  UserContainer,
  PostContainer,
  IconContainer,
} from "../screens/screens.styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

const PersonDetail = ({ onPress, info: { source, name, postNumber } }) => {
  return (
    <PersonContainer onPress={onPress}>
      <UserContainer>
        <AvatarIcon source={source} online />
        <Spacer position="right" size="small" />
        <Text>{name}</Text>
      </UserContainer>
      <PostContainer>
        <IconContainer>
          <Ionicons name="bookmarks" size={24} color={colors.brand.primary} />

          <Text> {postNumber} posts</Text>
        </IconContainer>
      </PostContainer>
    </PersonContainer>
  );
};

export default PersonDetail;
