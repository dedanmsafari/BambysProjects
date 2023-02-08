import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
import { colors } from "../../../infrastructure/theme/colors";
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
import BackArrow from "../components/backArrow.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { signInWithGooglePopup } from "../../../utils/firebase.utils";

const LoginScreen = ({ navigation }) => {
  const { setLoggedIn } = useContext(AuthenticationContext);

  const googleSignIn = async () => {
    await signInWithGooglePopup();
    setLoggedIn(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.brand.tertiary }}>
      <StyledSafeAreaView>
        <LoginContainer>
          <BackArrow title="Welcome Back" />

          <TextInput
            placeholder="Email"
            cursorColor={colors.brand.tertiary}
            style={{
              borderBottomWidth: 1,
              height: 40,
              padding: 5,
              borderBottomColor: "#f1f1f1",
            }}
          />
          <Spacer size="medium" />
          <TextInput
            placeholder="Password"
            cursorColor={colors.brand.tertiary}
            style={{
              borderBottomWidth: 1,
              height: 40,
              padding: 5,
              borderBottomColor: "#f1f1f1",
            }}
          />
          <Spacer size="large" />

          <SignInEmailButton activeOpacity={0.5}>
            <MaterialIcons name="email" size={17} color="white" />
            <Spacer position="right" />
            <Text variant="caption" style={{ color: "white" }}>
              Sign in
            </Text>
          </SignInEmailButton>

          <OtherSignInText>
            <Text variant="hint">Sign in with:</Text>
          </OtherSignInText>

          <OtherSignInBlock>
            {/* <SmsButton activeOpacity={0.5}>
              <FontAwesome
                name="hashtag"
                size={12}
                color={colors.brand.tertiary}
                style={{ marginTop: -2 }}
              />
              <Spacer position="right" size="xsmall" />
              <Text variant="caption">SMS</Text>
            </SmsButton> */}

            <GoogleButton activeOpacity={0.5} onPress={googleSignIn}>
              <Image
                style={{ height: 20, width: 20, marginTop: -2 }}
                source={require("../../../../assets/google.png")}
              />
              <Spacer position="right" size="xsmall" />
              <Text variant="caption">Google</Text>
            </GoogleButton>
          </OtherSignInBlock>
        </LoginContainer>
      </StyledSafeAreaView>
    </View>
  );
};

export default LoginScreen;
