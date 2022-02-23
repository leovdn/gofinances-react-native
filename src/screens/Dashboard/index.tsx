import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export function Dashboard() {
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "12/11/2021",
    },
    {
      title: "Desenvolvimento de App",
      amount: "R$21.043,60",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "22/07/2021",
    },
    {
      title: "Desenvolvimento de App",
      amount: "R$21.043,60",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "22/07/2021",
    },
    {
      title: "Desenvolvimento de App",
      amount: "R$21.043,60",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "22/07/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/21160525?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Leonardo</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 15.200,90"
          lastTransaction="Última entrada dia 13 de abril"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 11.120,00"
          lastTransaction="Última saída dia 23 de abril"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 4.800,00"
          lastTransaction="01 à 30 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        ></TransactionList>
      </Transactions>
    </Container>
  );
}
