import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../api/mutations';
import Auth from '../state/auth';
import { Form } from 'semantic-ui-react';


function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { ...formState },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Email Address' placeholder='youremail@address.com' id='email' onChange={handleChange} />
          <br></br>
          <Form.Input fluid label='Password' placeholder='*****' id='pwd' onChange={handleChange} />
        </Form.Group>  
        <br></br>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

}

export default Login;

{/* <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleChange} />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="age">Age:</label>
          <input placeholder="Age" name="age" type="age" id="age" onChange={handleChange} />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="yardSize">Size of yard:</label>
          <input placeholder="" name="password" type="password" id="pwd" onChange={handleChange} />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div> */}

      