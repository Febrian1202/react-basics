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
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import ProductListPage from './pages/ProductListPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import Navbar from './components/Navbar.tsx';
import AboutPage from './pages/AboutPage.tsx';
import FormPage from './pages/FormPage.tsx';
import RHFPage from './pages/RHFPage.tsx';

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
      <Navbar></Navbar>
      <div className='pt-16'>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/terms' element={<TermsPage />} />
          {/* Dynamic Route */}
          <Route path='/product/:productSlug' element={<ProductDetailPage />} />
          <Route path='/product-list' element={<ProductListPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/form' element={<FormPage />} />
          <Route path='/rhf' element={<RHFPage />} />


          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App