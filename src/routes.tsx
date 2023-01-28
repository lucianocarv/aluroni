import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Menu from './pages/menu';
import Nav from './components/nav';
import Layout from './components/layout';
import About from './pages/about';
import Footer from './components/footer';
import NotFound from './pages/not-found';

export function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
