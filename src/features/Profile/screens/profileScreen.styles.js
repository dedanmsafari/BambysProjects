import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

//---- Header Section Components

export const HeaderContainer = styled.View`
  height: 50px;
  flex-direction: row;
  background-color: ${colors.ui.header};
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const BackIconContainer = styled.View`
  flex-direction: row;
`;
export const MoreVertContainer = styled.View`
  flex-direction: row;
  margin-left: auto;
`;

//---- Profile Section Components

export const ProfileContainer = styled.View`
  align-items: center;
  padding: 20px 0px;
`;

export const DividerLine = styled.View`
  border: 1px solid lightgrey;
`;

//---- Location Section Components

export const LocationContainer = styled.View`
  padding: 20px;
`;

export const LocationAreas = styled.View`
  padding: 10px;
`;
export const IndividualLocation = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

export const LocationName = styled.View`
  flex-direction: row;
`;

export const LocationMarker = styled.View`
  margin-left: auto;
`;

//---- Interests Section Components

export const InterestContainer = styled.View`
  padding: 20px;
`;
export const InterestAreas = styled.View`
  padding-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

//----Slider Section Components

export const SliderContainer = styled.View`
  padding: 20px;
`;
export const SliderArea = styled.View`
  padding: 10px;
`;

// ---- Logo Section Component && signOut section

export const LogoContainer = styled.View`
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const SignOutContainer = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
`;
