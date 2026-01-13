import React from 'react';
import Welcome from './components/Welcome.tsx'
import Header from './components/Header.tsx';
import ProfileCard from './components/ProfileCard.tsx';

// Component
function App() {
  return (
    <React.Fragment>
      <Header />
      <h1>Hello World</h1>

      <ProfileCard name='Febrian Syah' job='Content Creator' year={2004} />
      <ProfileCard name='Theo' year={2000} />
      <Welcome />
    </React.Fragment>
  );
}

export default App
