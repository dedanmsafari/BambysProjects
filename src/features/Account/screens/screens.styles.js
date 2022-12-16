import styled from "styled-components/native";

export const ButtonsContainer = styled.View`
  padding: 10px 25px 40px 25px;
  background-color: white;
`;

export const SignInButton = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brand.tertiary};
  border-radius: 5px;
  elevation: 2;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 5px;
  elevation: 2;
`;
