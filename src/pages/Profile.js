import React from 'react';
import { QUERY_USER, QUERY_ALL_BREEDS, QUERY_USER_BREEDS } from '../api/queries';
import { useQuery } from '@apollo/client';
import { List } from 'semantic-ui-react'
import BreedCard from '../components/Nav/BreedCard';

const Profile = () => {
  const { data, loading } = useQuery(QUERY_USER);
  const { data: dataBreeds, loading: loadingBreeds } = useQuery(QUERY_USER_BREEDS, QUERY_ALL_BREEDS);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='userInfo'>
      <h1>User Info</h1>
      <List>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header as='a'>First Name:</List.Header>
        <List.Description>
        {data.user.firstName}
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header as='a'>Last Name:</List.Header>
        <List.Description>
        {data.user.lastName}
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>
        <List.Header as='a'>Email:</List.Header>
        <List.Description>
        {data.user.email}
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
      </div>
      
)
      <div className="container">
        <h1 className="dashboard">Welcome to your Doggie Dashboard</h1>
        {dataBreeds && !loadingBreeds && dataBreeds.breedsByUser.map(breed => (
          <div class="min-h-screen bg-gray-100 flex justify-center items-center">
            <BreedCard {...breed} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Profile;
