import React from 'react';
import Container from './Container/Container';
import Profile from './Profile/Profile';
import user from '../db/user';

const App = () => {
  return (
    <Container>
      <Profile user={user} />
    </Container>
  );
};

export default App;
