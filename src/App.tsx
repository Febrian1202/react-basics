// import React from 'react';
import Welcome from './components/Welcome.tsx'
import Header from './components/Header.tsx';
// import ProfileCard from './components/ProfileCard.tsx';
import Counter from './components/Counter.tsx';
import Like from './components/Like.tsx';

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
    <div style={{ padding: "16px 48px" }}>
      <Header />
      {/* {
        teachers.map((teacher) => {
          return <ProfileCard name={teacher.name} job={teacher.job} year={teacher.year} key={teacher.id} />
        })
      } */}
      <Counter />
      <Like />
      <Welcome />
    </div>
  );
}

export default App