import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './components/AppLayout/AppLayout';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import NotFound from './components/NotFound/NotFound';

import './App.css';
import FilmDetails from './components/FilmDetails/FilmDetails';
import { useAppSelector } from './hooks/redux';

function App() {
  const { isActive } = useAppSelector((state) => state.film)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Route>
          {isActive && <Route path='/film/:id' element={<FilmDetails />} />}
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
