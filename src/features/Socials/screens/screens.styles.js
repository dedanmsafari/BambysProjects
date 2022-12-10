import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const SocialsContainer = styled.View`
  flex: 1;
  background-color: ${colors.brand.secondary};
  padding-top: 3px;
`;

export const PersonContainer = styled.View`
  padding: 15px 20px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 0.8px;
  border-bottom-color: ${colors.ui.disabled};
  background-color: ${colors.ui.quaternary};
`;

export const UserContainer = styled.View`
  flex-direction: row;
`;

export const PostContainer = styled.View`
  flex-direction: row;
`;
export const IconContainer = styled.View`
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  margin-right: 5px;
`;
export const TextContainer = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.ui.quaternary};
`;
