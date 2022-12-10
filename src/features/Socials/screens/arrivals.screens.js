import React from "react";
import { View, FlatList } from "react-native";
import { Text } from "../../../components/text/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { SocialsContainer, TextContainer } from "./screens.styles";
import Interests from "../../Home/components/interests/interests.component";
import { Ionicons } from "@expo/vector-icons";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import PersonData from "../components/personDetail.data";
import PersonDetail from "../components/personDetail.component";
import { FadeInView } from "../../../animations/fade.animation";

const FeedList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 0 },
})``;

const LocalsScreen = () => {
  return (
    <SocialsContainer>
      <Interests />
      <TextContainer>
        <Text variant="title">123 Arrivals</Text>
        <Spacer position="right" size="small" />
        <Ionicons name="navigate" size={24} color={colors.ui.icons} />
      </TextContainer>
      <FeedList
        data={PersonData}
        renderItem={({ item }) => {
          return (
            <FadeInView>
              <PersonDetail info={item} />
            </FadeInView>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SocialsContainer>
  );
};

export default LocalsScreen;
