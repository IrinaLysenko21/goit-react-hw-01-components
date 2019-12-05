import React from 'react';
import Container from './Container/Container';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../db/user';
import statisticalData from '../db/statistical-data';
import friends from '../db/friends';
import FriendList from './FriendList/FriendList';

const App = () => {
  return (
    <>
      <Container title="Task 1">
        <Profile user={user} />
      </Container>
      <Container title="Task 2">
        <Statistics title="File upload" stats={statisticalData} />
      </Container>
      <Container title="Task 3">
        <FriendList friends={friends} />
      </Container>
    </>
  );
};

export default App;
