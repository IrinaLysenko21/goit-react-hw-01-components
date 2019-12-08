import React from 'react';
import Container from './Container/Container';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../db/user';
import statisticalData from '../db/statistical-data';
import friends from '../db/friends';
import transactions from '../db/transactions';

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
      <Container title="Task 4">
        <TransactionHistory transactions={transactions} />
      </Container>
    </>
  );
};

export default App;
