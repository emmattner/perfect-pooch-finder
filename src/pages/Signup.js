import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../state/auth';
import { ADD_USER } from '../api/mutations';
import { Form } from 'semantic-ui-react'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: { ...formState },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const livingOptions = [
    { key: 'Aptmnt', text: 'Apartment', value: 'apartment' },
    { key: 'Sml House', text: 'Small House', value: 'small house' },
    { key: 'Med House', text: 'Medium House', value: 'medium house' },
    { key: 'Lrg House', text: 'Large House', value: 'large house' },
    { key: 'Acerage', text: 'Acerage', value: 'acerage' },
  ]

  const activityOptions = [
    { key: 'Seldom', text: 'Seldom', value: 'Seldom' },
    { key: 'Not Very Active', text: 'Not Very Active', value: 'Not Very Active' },
    { key: 'Moderately Active', text: 'Moderately Active', value: 'Moderately Active' },
    { key: 'Very Active', text: 'Very Active', value: 'Very Active' },
  ]

  const breedOptions = [
    { key: 'Toy', text: 'Toy', value: 'Toy' },
    { key: 'Sml', text: 'Small', value: 'small' },
    { key: 'Med', text: 'Medium', value: 'medium' },
    { key: 'Lrg', text: 'Large', value: 'large' },
    { key: 'Giant', text: 'Giant', value: 'giant' },
    { key: 'I don\'t care', text: 'I don\'t care', value: "I don\'t care" },
  ]
  
  const foodOptions = [
    { key: '$10', text: '$10', value: '$10' },
    { key: '$20', text: '$20', value: '$20' },
    { key: '$30', text: '$30', value: '$30' },
    { key: 'More than $30', text: 'More than $30', value: 'More than $30' },
    
  ]

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>
      <h2>Sign Up!</h2>
      <br></br>
      <Form onSubmit={handleFormSubmit} className="container">
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' type='firstName' id='firstName' onChange={handleChange} />
          <Form.Input fluid label='Last name' placeholder='Last name' type='lastName' id='lastName' onChange={handleChange}/>
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Input fluid label='Password' placeholder='*****' type='password' id='pwd' onChange={handleChange}/>
          <Form.Input fluid label='Confirm Password' placeholder='*****' type='confirmPassword' id='confirmPwd' onChange={handleChange}/>
        </Form.Group>  
        <Form.Group widths='equal'>
          <Form.Input fluid label='Email Address' placeholder='youremail@address.com' type='email' id='email' onChange={handleChange}/>
        </Form.Group>  
          <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='What is your activity level?'
            options={activityOptions}
            placeholder='Activity Lvl'
            type='exerciseHours'
            id=''
            onChange={handleChange}
          />
          <Form.Select
            fluid
            label='What size is your living space?'
            options={livingOptions}
            placeholder='Living Space'
            type='livingSpace'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group inline>
          <label>What is your yard size?</label>
          <Form.Radio
            label='Small'
            value='sm'
            checked={true}
            type='yardSize'
            onChange={handleChange}
          />
          <Form.Radio
            label='Medium'
            value='md'
            checked={false}
            type='yardSize'
            onChange={handleChange}
          />
          <Form.Radio
            label='Large'
            value='lg'
            checked={false}
            type='yardSize'
            onChange={handleChange}
          />
            <Form.Radio
            label='X-Large'
            value='x-lg'
            checked={false}
            type='yardSize'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group inline>
          <label>What is your age group?</label>
          <Form.Radio
            label='10-19'
            value='10-19'
            checked={true}
            type='age'
            onChange={handleChange}
          />
          <Form.Radio
            label='20-29'
            value='20-29'
            checked={false}
            type='age'
            onChange={handleChange}
          />
          <Form.Radio
            label='30-39'
            value='30-39'
            checked={false}
            type='age'
            onChange={handleChange}
          />
            <Form.Radio
            label='40-49'
            value='40-49'
            checked={false}
            type='age'
            onChange={handleChange}
          />
            <Form.Radio
            label='50-59'
            value='50-59'
            checked={false}
            type='age'
            onChange={handleChange}
          />  
          
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Select
            fluid
            label='What size dog are you looking for?'
            options={breedOptions}
            placeholder='Breed Size'
            type='dogSize'
            onChange={handleChange}
          />
          <Form.Select
            fluid
            label='How much money are you willing to spend each week to feed your dog?'
            options={foodOptions}
            placeholder='Food cost'
            type='foodCost'
            onChange={handleChange}
          /> 
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' onChange={handleChange}/>
      </Form>
      <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
    </div>
  );
}

export default Signup;
