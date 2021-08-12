import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      age
      livingSpace
      yardSize
      exerciseHours
      foodCost
      dogSize
    }
  }
`;

export const QUERY_ALL_BREEDS = gql`
  {
    allBreeds {
      breed 
      bredFor 
      minWeight 
      maxWeight 
      temperament 
      minHeight 
      maxHeight 
      group 
      foodLevel 
      countryOfOrigin 
      lifespan 
    }
  }
`;
