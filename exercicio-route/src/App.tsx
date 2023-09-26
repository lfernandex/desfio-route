import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderPage from './component/HeaderPage';
import About from './routes/About';
import NotFound from './routes/NotFound';
import Products from './routes/Products';
import Computadores from './routes/Products/Computadores';
import Eletronicos from './routes/Products/Eletronicos';
import Livros from './routes/Products/Livros';
import Wellcome from './routes/Wellcome';

export default function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HeaderPage />} >

            <Route index element={<Wellcome />} />

            <Route path="/home" element={<Wellcome />} />

            <Route path="/products" element={<Products />}>
              <Route path="/products/computers" element={<Computadores />} />
              <Route path="/products/electronics" element={<Eletronicos />} />
              <Route path="/products/books" element={<Livros />} />
            </Route>

            <Route path="/about" element={<About />} />
            
            <Route path="/*" element={<NotFound />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </>

  );
}


