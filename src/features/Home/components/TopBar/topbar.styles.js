import styled from "styled-components/native";

export const TopBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;

  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const IconContainer = styled.View`
  flex-direction: row;
  padding-right: 15px;
`;

export const LogoButtonHome = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;
export const IconButton = styled.TouchableOpacity`
  padding-left: 15px;
`;

///--- modal styles

export const ModalContainer = styled.View`
  position: absolute;
  justify-content: space-around;
  padding: 5px 10px;
  top: 35px;
  right: 170px;
  width: 150px;
  height: 100px;
  background-color: whitesmoke;
  z-index: 1;
`;
