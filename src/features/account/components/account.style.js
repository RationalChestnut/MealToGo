import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";
import homeImage from "../../../../assets/home_bg.jpg";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { TextInput } from "react-native-paper";
import Lottie from "lottie-react-native";
import watermelon from "../../../../assets/watermelon.json";
export const Background = styled(ImageBackground).attrs({ source: homeImage })`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "contained",
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const Input = styled(TextInput)`
  width: 250px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const StyledLottieView = styled(Lottie).attrs({
  key: "animation",
  autoPlay: true,
  loop: true,
  resizeMode: "cover",
  source: watermelon,
})`
  width: 100%;
  height: 60%;
  position: absolute;
  top: 50;
`;
