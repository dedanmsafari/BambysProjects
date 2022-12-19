import React from "react";
import { View, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import BackArrow from "../components/backArrow.component";
import {
  InterestsContainer,
  RegisterContainer,
  InterestsItemContainer,
  ScrollContainer,
} from "./screens.styles";
import { SignInButton } from "./screens.styles";
import InterestItem from "../../Home/components/interests/interestItem";

const Interests = [
  "Movies",
  "Writing",
  "Fitness",
  "Dancing",
  "Technology",
  "Humor",
  "Social",
  "Music",
  "Fashion",
  "Gaming",
  "Cars",
  "Photography",
  "Business",
  "Cooking",
  "Politics",
  "Art",
  "Religion",
  "Adventure",
  "Relationships",
  "Family",
  "News",
  "Philosophy",
  "Board Games",
  "Aviation",
  "Shopping",
  "Design",
  "Travel",
  "Food",
  "Reading",
  "Health",
  "Culture",
  "History",
  "School Life",
  "Parenting",
  "Animie",
  "Environment",
  "Farming",
];

const InterestsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <RegisterContainer>
        <BackArrow
          title="Pick Your  Interests"
          caption=" create a personalized experience."
        />
        <ScrollContainer>
          <ScrollView showsVerticalScrollIndicator={false}>
            <InterestsContainer>
              {Interests.map((interest) => (
                <InterestsItemContainer key={interest}>
                  <InterestItem interest={interest} />
                </InterestsItemContainer>
              ))}
            </InterestsContainer>
          </ScrollView>
        </ScrollContainer>

        <Spacer size="medium" />
        <SignInButton
          activeOpacity={0.5}
          onPress={() => navigation.navigate("RegisterConnect")}
        >
          <Text variant="caption" style={{ color: "white" }}>
            Next
          </Text>
        </SignInButton>
      </RegisterContainer>
    </View>
  );
};

export default InterestsScreen;
