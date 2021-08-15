import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!,  $age: String!, $dogType: String!, $temperament: String!, $foodCost: Int!, $dogSize: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, age: $age, dogType: $dogType, temperament: $temperament, foodCost: $foodCost, dogSize: $dogSize ) {
      token
      user {
        _id
      }
    }
  }
`;
