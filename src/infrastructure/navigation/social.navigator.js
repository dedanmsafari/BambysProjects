import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ArrivalScreen from "../../features/Socials/screens/arrivals.screens";
import LocalsScreen from "../../features/Socials/screens/locals.screens";
import { StyledSafeAreaView } from "../../utils/safeArea.util.component";
import { colors } from "../theme/colors";

const Tab = createMaterialTopTabNavigator();

function SocialNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StyledSafeAreaView>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 15, fontWeight: "500" },
            tabBarActiveTintColor: `${colors.brand.tertiary}`,
            tabBarIndicatorStyle: {
              backgroundColor: `${colors.brand.tertiary}`,
            },
          }}
        >
          <Tab.Screen name="Locals" component={LocalsScreen} />
          <Tab.Screen name="Arrivals" component={ArrivalScreen} />
        </Tab.Navigator>
      </StyledSafeAreaView>
    </View>
  );
}

export default SocialNavigator;
