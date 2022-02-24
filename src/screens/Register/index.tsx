import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TansactionTypes,
} from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TansactionTypes>
            <TransactionTypeButton title="Income" type="up" />
            <TransactionTypeButton title="Outcome" type="down" />
          </TansactionTypes>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
