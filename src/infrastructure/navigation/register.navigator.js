import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { colors } from "../theme/colors";
import UsernameScreen from "../../features/Account/screens/username.screens";
import LocationScreen from "../../features/Account/screens/location.screens";
import InterestsScreen from "../../features/Account/screens/interests.screens";
import RegisterScreen from "../../features/Account/screens/register.screens";
import { StyledSafeAreaView } from "../../utils/safeArea.util.component";

const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.brand.tertiary }}>
      <StyledSafeAreaView>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name="Username" component={UsernameScreen} />
          <Stack.Screen name="Location" component={LocationScreen} />
          <Stack.Screen name="Interests" component={InterestsScreen} />
          <Stack.Screen name="RegisterConnect" component={RegisterScreen} />
        </Stack.Navigator>
      </StyledSafeAreaView>
    </View>
  );
};

export default RegisterNavigator;
