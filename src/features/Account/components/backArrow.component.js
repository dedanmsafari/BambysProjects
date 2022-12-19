import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LoginIconContainer } from "../screens/screens.styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";

const BackArrow = ({ title, caption }) => {
  const navigation = useNavigation();

  return (
    <>
      <LoginIconContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </LoginIconContainer>
      <Image
        style={{ height: 36, width: 130 }}
        source={require("../../../../assets/brandName.png")}
      />
      <Spacer size="medium" />
      <Text variant="label">{title}</Text>
      {caption && <Text variant="caption">{caption}</Text>}
      <Spacer size="medium" />
    </>
  );
};

const styles = StyleSheet.create({});

export default BackArrow;
