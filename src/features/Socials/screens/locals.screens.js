import React from "react";
import { View, FlatList } from "react-native";
import { Text } from "../../../components/text/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { SocialsContainer, TextContainer } from "./screens.styles";
import { Ionicons } from "@expo/vector-icons";
import Interests from "../../Home/components/interests/interests.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import PersonData from "../components/personDetail.data";
import PersonDetail from "../components/personDetail.component";
import { FadeInView } from "../../../animations/fade.animation";
import { useNavigation } from "@react-navigation/native";
import UserDetailsScreen from "../../Home/screens/userDetails.screens";

const FeedList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 0 },
})``;

const LocalsScreen = () => {
  const navigation = useNavigation();
  return (
    <SocialsContainer>
      <Interests />
      <TextContainer>
        <Text variant="title">400 locals</Text>
        <Spacer position="right" size="small" />
        <Ionicons name="location-sharp" size={24} color={colors.ui.icons} />
      </TextContainer>
      <FeedList
        data={PersonData}
        renderItem={({ item }) => {
          return (
            <FadeInView>
              <PersonDetail
                onPress={() => navigation.navigate(UserDetailsScreen)}
                info={item}
              />
            </FadeInView>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SocialsContainer>
  );
};

export default LocalsScreen;
