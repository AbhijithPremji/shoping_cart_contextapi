import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import Navbar from './pages/Navbar';
import Cart from './pages/Cart';
import { Shop } from './pages/Shop';
import ShopcontextProvider from './context/Shop-context';
import Check from './pages/Check';

function App() {
  return (
    <div>
       <ShopcontextProvider>
      <Router>
       
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Check/>}/>
        </Routes>
       
      </Router>
       </ShopcontextProvider>
    </div>
  );
}

export default App;
