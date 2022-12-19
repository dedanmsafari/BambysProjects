import styled from "styled-components/native";

/// --- Account Screen

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
/// -- Universal register Container
export const RegisterContainer = styled.View`
  padding: 0px 25px;
`;

/// --login Screen

export const LoginContainer = styled.View`
  flex: 1;
  background-color: white;
  padding: 0px 25px;
`;

export const LoginIconContainer = styled.View`
  flex-direction: row;
  padding: 20px 0px;
`;

export const SignInEmailButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.brand.tertiary};
  border-radius: 5px;
  elevation: 2;
`;

export const OtherSignInText = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 20px 0px;
`;

export const OtherSignInBlock = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const GoogleButton = styled.TouchableOpacity`
  flex-direction: row;
  border: 1px solid gray;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 160px;
  padding: 5px;
`;

export const SmsButton = styled.TouchableOpacity`
  flex-direction: row;
  border: 1px solid gray;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 160px;
  padding: 05px;
`;

/// --- Interests

export const ScrollContainer = styled.View`
  height: 510px;
`;

export const InterestsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

export const InterestsItemContainer = styled.View`
  padding: 10px 0px;
`;
