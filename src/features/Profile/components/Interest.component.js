import React from "react";
import { View, StyleSheet } from "react-native";
import {
  InterestAreas,
  InterestContainer,
} from "../screens/profileScreen.styles";
import { Text } from "../../../components/text/text.component";
import { Button } from "react-native-paper";

const interests = [
  "Chess",
  "Cooking",
  "Social",
  "Football",
  "Meet-ups",
  "Videos",
];

const InterestBlock = () => {
  return (
    <InterestContainer>
      <Text>Interests</Text>
      <InterestAreas>
        {interests.map((interest) => (
          <Button disabled key={interest}>
            {interest}
          </Button>
        ))}
      </InterestAreas>
    </InterestContainer>
  );
};

export default InterestBlock;
