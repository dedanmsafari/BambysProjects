import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SliderArea, SliderContainer } from "../screens/profileScreen.styles";
import { Slider } from "@miblanchard/react-native-slider";
import { Text } from "../../../components/text/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";

const RadiusDistanceBlock = () => {
  const [value, setValue] = useState(0);

  const thumbComponent = () => {
    return <Text variant="caption">{Math.round(value * 10) / 10} Kms</Text>;
  };

  return (
    <SliderContainer>
      <Text>Radius</Text>
      <Spacer />
      <SliderArea>
        <Slider
          value={value}
          onValueChange={(value) => setValue(value)}
          minimumTrackTintColor={colors.brand.tertiary}
          thumbTintColor={colors.brand.tertiary}
          maximumValue={10}
          minimumValue={0}
          renderAboveThumbComponent={thumbComponent}
        />
      </SliderArea>
    </SliderContainer>
  );
};

export default RadiusDistanceBlock;
