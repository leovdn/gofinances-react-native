import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "12/11/2021",
    },
    {
      id: "2",
      type: "positive",
      title: "Desenvolvimento de App",
      amount: "R$21.043,60",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "22/07/2021",
    },
    {
      id: "3",
      type: "negative",
      title: "Conta de luz",
      amount: "R$343,42",
      category: {
        name: "Despesas",
        icon: "shopping-bag",
      },
      date: "21/07/2021",
    },
    {
      id: "4",
      type: "negative",
      title: "Contador",
      amount: "R$253,32",
      category: {
        name: "Despesas",
        icon: "shopping-bag",
      },
      date: "05/07/2021",
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        ></TransactionList>
      </Transactions>
    </Container>
  );
}
