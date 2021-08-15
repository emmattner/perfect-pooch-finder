import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      age
      temperament
      dogType
      dogSize
      foodCost
    }
  }
`;

export const QUERY_ALL_BREEDS = gql`
  {
    allBreeds {
      breed 
      image
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


export const QUERY_USER_BREEDS = gql`
  {
    breedsByUser {
      breed 
      image
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
