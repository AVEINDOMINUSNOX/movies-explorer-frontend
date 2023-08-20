import { Route, Routes } from 'react-router-dom';

import AboutProject from './components/Main/AboutProject/AboutProject';
import Header from './components/Common/Header/Header';
import Login from './components/Auth/Login/Login';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import Profile from './components/Auth/Profile/Profile';
import Register from './components/Auth/Register/Register';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Footer from './components/Common/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-project" element={<AboutProject />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;