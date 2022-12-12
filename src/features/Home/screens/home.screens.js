import { View, ScrollView } from "react-native";

import React, { useState } from "react";

import { FadeInView } from "../../../animations/fade.animation";
import FeedData from "../components/feed/data";
import Post from "../components/post/post.component";

import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";
import Interests from "../components/interests/interests.component";
import TopBar from "../components/TopBar/topbar.component";
import Feed from "../components/feed/feed.component";
import { ModalContainer } from "../components/TopBar/topbar.styles";
import { Text } from "../../../components/text/text.component";
export default function HomeScreen({ navigation }) {
  const [openProximityModal, setOpenProximityModal] = useState(false);

  const toggleModal = () => {
    setOpenProximityModal(!openProximityModal);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.brand.secondary }}>
      <TopBar onPress={toggleModal} />
      {openProximityModal && (
        <ModalContainer>
          <Text variant="caption" style={{ color: colors.ui.icons }}>
            All
          </Text>
          <Text variant="caption">Locals</Text>
          <Text variant="caption">Arrivals</Text>
        </ModalContainer>
      )}
      <ScrollView>
        <Post />
        <Interests />
        {FeedData.map((feedData) => (
          <FadeInView key={feedData.userName}>
            <Spacer position="bottom" size="xsmall">
              <Feed feed={feedData} />
            </Spacer>
          </FadeInView>
        ))}
      </ScrollView>
    </View>
  );
}
