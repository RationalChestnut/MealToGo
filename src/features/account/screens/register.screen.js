import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Background, Title } from "../components/account.style";
import homeImage from "../../../../assets/home_bg.jpg";
import { Input } from "../components/account.style";
import { AuthButton } from "../components/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountContainer } from "../components/account.style";
import { Spacer } from "../../../components/spacer/Spacer.component";
import { AccountCover } from "../components/account.style";
import { ActivityIndicator, Colors } from "react-native-paper";
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  console.log(error);

  return (
    <Background source={homeImage}>
      <AccountCover />
      <Title>Login</Title>
      <AccountContainer>
        <Spacer position="bottom" size="large">
          <Input
            label="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(emailText) => setEmail(emailText)}
          />
        </Spacer>
        {error ? <Text variant="error">{error}</Text> : <></>}
        <Spacer position="bottom" size="large">
          <Input
            label="Password"
            value={password}
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry
            onChangeText={(passwordText) => setPassword(passwordText)}
          />
        </Spacer>
        <Spacer position="bottom" size="large">
          <Input
            label="Confirm Password"
            value={repeatedPassword}
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry
            onChangeText={(passwordText) => setRepeatedPassword(passwordText)}
          />
        </Spacer>
        {!isLoading ? (
          <AuthButton
            icon="email"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </Background>
  );
};
