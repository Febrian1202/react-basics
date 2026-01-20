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
import EmployeesPage from './pages/employees/EmployeesPage.tsx';

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
          <Route path='/employees' element={<EmployeesPage />} />


          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App