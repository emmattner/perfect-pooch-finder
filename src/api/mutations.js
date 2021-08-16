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
  mutation addUser($firstName: String!, $lastName: String!, $password: String!, $email: String!, $age: String!, $dogType: String!, $temperament: String!, $foodCost: Int!, $dogSize: String!) {
    addUser(firstName: $firstName, lastName: $lastName, password: $password, email: $email, age: $age, dogType: $dogType, temperament: $temperament, foodCost: $foodCost, dogSize: $dogSize ) {
      token
      user {
        _id
      }
    }
  }
`;
