import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/style.scss';
import Home from './pages/Home';
import Header from './components/Header';
import '../node_modules/@splidejs/react-splide/dist/css/splide.min.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
