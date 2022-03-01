import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../global/styles/theme";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import {
  Container,
  Header,
  LoadContainer,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import { SignInSocialButton } from "../../components/SignInSocialButton";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <TitleWrapper>
              <LogoSvg width={RFValue(120)} height={RFValue(68)} />

              <Title>
                Controle suas {"\n"}
                finanças de forma {"\n"}
                muito simples
              </Title>
            </TitleWrapper>

            <SignInTitle>
              Faça seu login com {"\n"}
              uma das contas abaixo
            </SignInTitle>
          </Header>

          <Footer>
            <FooterWrapper>
              <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} />
              <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
            </FooterWrapper>
          </Footer>
        </>
      )}
    </Container>
  );
}
