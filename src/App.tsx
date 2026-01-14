// // import React from 'react';
// import Welcome from './components/Welcome.tsx'
// import Header from './components/Header.tsx';
// // import ProfileCard from './components/ProfileCard.tsx';
// import Counter from './components/Counter.tsx';
// import Like from './components/Like.tsx';
import { Routes, Route } from 'react-router'
import TermsPage from './pages/TermsPage.tsx';
import Homepage from './pages/Homepage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

// type Teacher = {
//   name: string;
//   job: string;
//   year: number;
//   id: number
// }

// const teachers: Teacher[] = [
//   {
//     job: 'Dosen',
//     name: 'Sandhika Galih',
//     year: 1995,
//     id: 1
//   },
//   {
//     job: 'Creator',
//     name: 'Theo',
//     year: 2000,
//     id: 2
//   },
//   {
//     job: 'Tech Lead',
//     name: 'Eko Khannedy',
//     year: 1996,
//     id: 3
//   },
//   {
//     name: "Febrian Syah",
//     job: "Mahasiswa",
//     year: 2004,
//     id: 4
//   }
// ]

// Component
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/terms' element={<TermsPage />} />
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App