import React from 'react';
import { QUERY_USER } from '../api/queries';
import { useQuery } from '@apollo/client';
import SimpleDateTime from 'react-simple-timestamp-to-date';

const Profile = () => {
  const { data, loading } = useQuery(QUERY_USER);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {data.user.firstName}</p>
      <p>Last Name: {data.user.lastName}</p>
      <p>Email: {data.user.email}</p>
      <div className="container">
        <h1>Welcome toy your Doggie Dashboard</h1>
        <div class="min-h-screen bg-gray-100 flex justify-center items-center">
          <div class="container flex justify-center">
            <div class="max-w-sm py-32">
              <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                <div class="py-6 px-8 rounded-lg bg-white">
                  <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer"></h1>
                  <p class="text-gray-700 tracking-wide">Here will display about the dog</p>
                  <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><td onClick={() => window.open("https://dog.fandom.com/wiki/Dog_Wiki", "_blank")}>Learn More!</td></button>
                </div>
                <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span class="text-md">$150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="min-h-screen bg-gray-100 flex justify-center items-center">
          <div class="container flex justify-center">
            <div class="max-w-sm py-32">
              <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                <div class="py-6 px-8 rounded-lg bg-white">
                  <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer"></h1>
                  <p class="text-gray-700 tracking-wide">Here will display about the dog</p>
                  <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><td onClick={() => window.open("https://dog.fandom.com/wiki/Dog_Wiki", "_blank")}>Learn More!</td></button>
                </div>
                <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span class="text-md"> <p>
                    <b>Current Date Time:  </b>
                    <SimpleDateTime dateSeparator="-" timeSeparator=":" format="DMY" meridians="1">{new Date()}</SimpleDateTime>
                  </p>
                    {/* Current Date Time: 2020/04/29 12-24-13 */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
