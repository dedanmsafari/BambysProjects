import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import BackArrow from "../components/backArrow.component";
import { RegisterContainer } from "./screens.styles";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
  GoogleButton,
  SmsButton,
  LoginContainer,
  LoginIconContainer,
  OtherSignInBlock,
  OtherSignInText,
  SignInEmailButton,
} from "./screens.styles";
import HomeNavigator from "../../../infrastructure/navigation/home.navigator";
import HomeScreen from "../../Home/screens/home.screens";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <RegisterContainer>
        <BackArrow
          title="Connect an Account"
          caption="Choose a way to connect with your Account"
        />
        <Spacer size="small" />
        <OtherSignInBlock>
          <SmsButton activeOpacity={0.5}>
            <FontAwesome
              name="hashtag"
              size={12}
              color={colors.brand.tertiary}
              style={{ marginTop: -2 }}
            />
            <Spacer position="right" size="xsmall" />
            <Text variant="caption">PHONE</Text>
          </SmsButton>

          <GoogleButton
            activeOpacity={0.5}
            onPress={() => navigation.navigate("HomeConnect")}
          >
            <Image
              style={{ height: 20, width: 20, marginTop: -2 }}
              source={require("../../../../assets/google.png")}
            />
            <Spacer position="right" size="xsmall" />
            <Text variant="caption">Google</Text>
          </GoogleButton>
        </OtherSignInBlock>
        <OtherSignInText>
          <Text variant="hint">Sign up with:</Text>
        </OtherSignInText>
        <SignInEmailButton activeOpacity={0.5}>
          <MaterialIcons name="email" size={17} color="white" />
          <Spacer position="right" />
          <Text variant="caption" style={{ color: "white" }}>
            Sign up with Email
          </Text>
        </SignInEmailButton>
      </RegisterContainer>
    </View>
  );
};

export default RegisterScreen;
