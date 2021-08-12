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
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $confirmPassword: String!,  $age: String!, $livingSpace: String!, $yardSize: String!, $exerciseHours: String! $foodCost: String!, $dogSize: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, confirmPassword: $confirmPassword, age: $age, livingSpace: $livingSpace, yardSize: $yardSize, exerciseHours: $exerciseHours, foodCost: $foodCost, dogSize: $dogSize ) {
      token
      user {
        _id
      }
    }
  }
`;
