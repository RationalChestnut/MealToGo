import React from "react";
import { Spacer } from "../../../components/spacer/Spacer.component";
import {
  AccountContainer,
  AccountCover,
  Background,
  StyledLottieView,
  Title,
} from "../components/account.style";
import { AuthButton } from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <AccountCover />
      <StyledLottieView />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate("login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            onPress={() => navigation.navigate("register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </Background>
  );
};
