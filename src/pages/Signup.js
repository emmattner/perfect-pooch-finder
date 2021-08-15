import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../state/auth';
import { ADD_USER } from '../api/mutations';
import { Form } from 'semantic-ui-react'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '', age: '', });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: { ...formState },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event, {name, value}) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // match this to temperament value
  const temperamentOptions = [
    { key: 'Affectionate', text: 'Affectionate', value: 'Affectionate' },
    { key: 'Friendly', text: 'Friendly', value: 'Friendly' },
    { key: 'Lively', text: 'Lively', value: 'Lively' },
    { key: 'Gentle', text: 'Gentle', value: 'Gentle' },
    { key: 'Intelligent', text: 'Intelligent', value: 'Intelligent' },
    { key: 'Quiet', text: 'Quiet', value: 'Quiet' },
    { key: 'Sociable', text: 'Sociable', value: 'Sociable' },
    { key: 'Playful', text: 'Playful', value: 'Playful' },
    { key: 'Agile', text: 'Agile', value: 'Agile' },
    { key: 'Active', text: 'Active', value: 'Active' },
    { key: 'Loyal', text: 'Loyal', value: 'Loyal' },
    { key: 'Outgoing', text: 'Outgoing', value: 'Outgoing' },
    { key: 'Protective', text: 'Protective', value: 'Protective' },
    
  ]
  // Match this to breed group. 
  const dogType = [
    { key: 'Terrier', text: 'Terrier', value: 'Terrier' },
    { key: 'Working', text: 'Working', value: 'Working' },
    { key: 'Non-Sporting', text: 'Non-Sporting', value: 'Non-Sporting' },
    { key: 'Toy', text: 'Toy', value: 'Toy' },
    { key: 'Hound', text: 'Hound', value: 'Hound' },
    { key: 'Sporting', text: 'Sporting', value: 'Sporting' },
    { key: 'Herding', text: 'Herding', value: 'Herding' },
  ]
  // change this to match breed.minWeight lte 
  const dogSize = [
    { key: 'Toy', text: 'Toy', value: 5 },
    { key: 'Sml', text: 'Small', value: 10 },
    { key: 'Med', text: 'Medium', value: 20 },
    { key: 'Lrg', text: 'Large', value: 30 },
    { key: 'Giant', text: 'Giant', value: 1000 },
  ]
  
  const foodOptions = [
    { key: '$', text: '$', value: 50 },
    { key: '$$', text: '$$', value: 150 },
    { key: '$$$', text: '$$$', value: 300 },
    { key: '$$$$', text: '$$$$', value: 500 },
    
  ]

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>
      <h2>Sign Up!</h2>
      <br></br>
      <Form onSubmit={handleFormSubmit} className="container">
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' type='firstName' id='firstName' name='firstName' onChange={handleChange} />
          <Form.Input fluid label='Last name' placeholder='Last name' type='lastName' id='lastName' name='lastName' onChange={handleChange}/>
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Input fluid label='Password' placeholder='*****' type='password' id='pwd' name='password' onChange={handleChange}/>
        </Form.Group>  
        <Form.Group widths='equal'>
          <Form.Input fluid label='Email Address' placeholder='youremail@address.com' type='email' id='email' name='email' onChange={handleChange}/>
        </Form.Group>  
          <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='What breed type are you looking for?'
            options={dogType}
            placeholder='Breed Type'
            id='dogType'
            name='dogType'
            onChange={handleChange}
          />
          <Form.Select
            fluid
            label='Select the temperament you wish for your dog'
            options={temperamentOptions}
            placeholder='Temperament'
            id='temperament'
            name='temperament'
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Form.Group inline>
          <label>What is your age group?</label>
          <Form.Radio
            label='10-19'
            value='10-19'
            checked={formState.age === '10-19'}
            name='age'
            onChange={handleChange}
          />
          <Form.Radio
            label='20-29'
            value='20-29'
            checked={formState.age === '20-29'}
            name='age'
            onChange={handleChange}
          />
          <Form.Radio
            label='30-39'
            value='30-39'
            checked={formState.age === '30-39'}
            name='age'
            onChange={handleChange}
          />
            <Form.Radio
            label='40-49'
            value='40-49'
            checked={formState.age === '40-49'}
            name='age'
            onChange={handleChange}
          />
            <Form.Radio
            label='50-59'
            value='50-59'
            checked={formState.age === '50-59'}
            name='age'
            onChange={handleChange}
          />  
          
        </Form.Group>
        <br></br>
        <Form.Group widths='equal'>
        <Form.Select
            fluid
            label='What size dog are you looking for?'
            options={dogSize}
            placeholder='Breed Size'
            type='dogSize'
            name='dogSize'
            onChange={handleChange}
          />
          <Form.Select
            fluid
            label='How much money are you willing to spend each week to feed your dog?'
            options={foodOptions}
            placeholder='Food cost'
            type='foodCost'
            name='foodCost'
            onChange={handleChange}
          /> 
        </Form.Group>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </Form>
      
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
    </div>
  );
}

export default Signup;
